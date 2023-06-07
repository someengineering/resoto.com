import os
import os.path
import re
import time
from collections import defaultdict
from itertools import takewhile
from typing import Any, Dict, List

import requests
import urllib3
from requests import Response
from requests.adapters import HTTPAdapter
from urllib3.exceptions import InsecureRequestWarning
from urllib3.util import Retry

core = "https://localhost:8900"

# This list is used as filter: only providers listed here get exported
providers = [
    "aws",
    "digitalocean",
    "dockerhub",
    "gcp",
    "github",
    "kubernetes",
    "onelogin",
    "onprem",
    "posthog",
    "scarf",
    "slack",
    "vsphere",
]
urllib3.disable_warnings(InsecureRequestWarning)


def get_url(url: str, params: dict = None) -> Response:
    session = requests.Session()
    adapter = HTTPAdapter(
        max_retries=Retry(
            total=3,
            backoff_factor=0.1,
        )
    )
    session.mount("https://", adapter)
    return session.get(url, params=params, verify=False)


def get_kinds() -> Dict[str, List[Any]]:
    kinds = defaultdict(list)
    for kind in get_url(f"{core}/graph/resoto/model").json():
        groups = [a for a in providers if kind["fqn"].startswith(f"{a}_") and kind.get("aggregate_root", False)]
        if groups:
            kinds[groups[0]].append(kind)

    return kinds


def write_md(provider: str, kinds: list):
    if os.path.exists(f"./{provider}.mdx"):
        # in case the file exists, read the header section until the first h2 (##)
        with (open(f"./{provider}.mdx", "r+")) as file:
            lines = takewhile(lambda l: not l.startswith("## "), file.readlines())
    else:
        # provider file does not exist, create default header
        lines = [
            f"---\nsidebar_label: {provider.capitalize()}\n---\n\n",
            f"# {provider.capitalize()} Resource Data Models\n\n",
        ]

    with open(f"./{provider}.mdx", "w+") as file:
        for line in lines:
            file.write(line)

        for name in sorted(a["fqn"] for a in kinds):
            file.write(f"## `{name}`\n\n")
            file.write(f"<ZoomPanPinch>\n\n")
            file.write(f'```kroki imgType="plantuml" imgAlt="Diagram of {name} data model"\n')
            file.write(
                re.sub(
                    r"\n+",
                    "\n",
                    get_url(f"{core}/graph/resoto/model/uml", params={"output": "puml", "show": name}).text,
                ).strip()
            )
            file.write("\n```\n\n")
            file.write("</ZoomPanPinch>\n\n")
            file.write(f"<details>\n\n<summary>Relationships to Other Resources</summary>\n\n<div>\n\n")
            file.write(
                f'<ZoomPanPinch>\n\n```kroki imgType="plantuml" imgAlt="Diagram of {name} resource relationships"\n'
            )
            file.write(
                re.sub(
                    r"\n+",
                    "\n",
                    get_url(
                        f"{core}/graph/resoto/model/uml",
                        params={
                            "output": "puml",
                            "show": name,
                            "dependency": "default",
                            "with_base_classes": "false",
                            "with_subclasses": "false",
                            "with_inheritance": "false",
                            "with_predecessors": "true",
                            "with_successors": "true",
                            "with_properties": "false",
                        },
                    ).text,
                ).strip()
            )
            file.write(f"\n```\n\n</ZoomPanPinch>\n\n</div>\n\n</details>\n\n")


def load_valid_kinds() -> Dict[str, Any]:
    for _ in range(30):  # number of retries
        try:
            print("Get available kinds...")
            kinds = get_kinds()
            if kinds:
                return kinds
            else:
                print(f"Missing some required kinds, trying again in 5 seconds...")
        except Exception as ex:
            print(f"Error getting list of kinds: {ex}")
        time.sleep(5)
    raise ValueError("Could not load kinds!")


def export() -> None:
    kinds = load_valid_kinds()
    for provider in providers:
        if len(kinds.get(provider, [])) > 0:
            if not os.path.exists(f"./{provider}"):
                os.mkdir(f"./{provider}")
            if not os.path.exists(f"./{provider}/img"):
                os.mkdir(f"./{provider}/img")
            print("---------------------------")
            print(f"Create provider file: {provider} with {len(kinds[provider])} service kinds")
            write_md(provider, kinds[provider])


export()
