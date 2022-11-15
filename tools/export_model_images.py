import os
import os.path
import sys
from collections import defaultdict

import requests
import urllib3
from requests.adapters import HTTPAdapter
from urllib3.util import Retry

core = "https://localhost:8900"
provider_names = [
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
urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)


def get_url(url: str, params: dict = None):
    session = requests.Session()
    adapter = HTTPAdapter(
        max_retries=Retry(
            total=10,
            backoff_factor=5,
        )
    )
    session.mount("https://", adapter)
    return session.get(url, params=params, verify=False)


by_provider = defaultdict(list)
for kind in get_url(f"{core}/model").json():
    groups = [a for a in provider_names if kind["fqn"].startswith(f"{a}_") and kind.get("aggregate_root", False)]
    if groups:
        by_provider[groups[0]].append(kind)


def export_images(provider: str):
    for kind in by_provider[provider]:
        name = kind["fqn"]
        print(f"Exporting {name}")
        with open(f"./{provider}/img/{name}.svg", "w+") as file:
            image = get_url(f"{core}/model/uml", params={"show": name, "link_classes": "true"})
            file.write(image.text)
        with open(f"./{provider}/img/{name}_relationships.svg", "w+") as file:
            parms = {
                "show": name,
                "dependency": "default",
                "with_base_classes": "false",
                "with_subclasses": "false",
                "with_inheritance": "false",
                "with_predecessors": "true",
                "with_successors": "true",
                "with_properties": "false",
                "link_classes": "true",
            }
            image = get_url(f"{core}/model/uml", params=parms)
            file.write(image.text)


def print_md(provider: str):
    if os.path.exists(f"./{provider}/index.md"):
        with (open(f"./{provider}/index.md", "r+")) as file:
            lines = file.readlines()
    else:
        lines = [
            f"---\nsidebar_label: {provider.capitalize()}\n---",
            "",
            f"# {provider.capitalize()} Resource Data Models",
            "",
            "```mdx-code-block\nimport ZoomPanPinch from '@site/src/components/ZoomPanPinch';\n```",
        ]

    with open(f"./{provider}/index.md", "w+") as file:
        original_stdout = sys.stdout
        sys.stdout = file

        if ":::\n" in lines:
            lastline = ":::"
        else:
            lastline = "```"

        for line in lines:
            line = line.strip("\n")
            print(line)

            if line == lastline:
                print()
                break

        for name in sorted(a["fqn"] for a in by_provider[provider]):
            print(f"## `{name}`\n")
            print(f"<ZoomPanPinch>\n\n![Diagram of {name} data model](./img/{name}.svg)\n\n</ZoomPanPinch>\n")
            print(f"<details>\n<summary>Relationships to Other Resources</summary>\n<div>\n<ZoomPanPinch>\n")
            print(f"![Diagram of {name} resource relationships](./img/{name}_relationships.svg)\n")
            print(f"</ZoomPanPinch>\n</div>\n</details>\n")

        sys.stdout = original_stdout


for provider in provider_names:
    if len(by_provider[provider]) > 0:
        if not os.path.exists(f"./{provider}"):
            os.mkdir(f"./{provider}")
        if not os.path.exists(f"./{provider}/img"):
            os.mkdir(f"./{provider}/img")
        export_images(provider)
        print_md(provider)
