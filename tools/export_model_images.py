import os, os.path
import requests
import sys
import urllib3
from collections import defaultdict

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

by_provider = defaultdict(list)
for kind in requests.get(f"{core}/model", verify=False).json():
    groups = [
        a
        for a in provider_names
        if kind["fqn"].startswith(f"{a}_") and kind.get("aggregate_root", False)
    ]
    if groups:
        by_provider[groups[0]].append(kind)


def export_images(provider: str):
    for kind in by_provider[provider]:
        name = kind["fqn"]
        print(f"Exporting {name}")
        with open(f"./{provider}/img/{name}.svg", "w+") as file:
            image = requests.get(
                f"{core}/model/uml",
                params={"show": name, "link_classes": "true"},
                verify=False,
            )
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
            image = requests.get(f"{core}/model/uml", params=parms, verify=False)
            file.write(image.text)


def print_md(provider: str):
    if os.path.exists(f"./{provider}/index.md"):
        with (open(f"./{provider}/index.md", "r+")) as file:
            lines = file.readlines()
    else:
        lines = [
          f"---\nsidebar_label: {provider.capitalize()}\n---",
          "",
          f"# {provider.capitalize()} Resource Data Models"
        ]

    with open(f"./{provider}/index.md", "w+") as file:
        original_stdout = sys.stdout
        sys.stdout = file

        if ":::\n" in lines:
            lastline = ":::\n"
        else:
            lastline = "# "

        for line in lines:
            print(line.strip("\n"))
            if line.startswith(lastline):
                print()
                break

        for name in sorted(a["fqn"] for a in by_provider[provider]):
            print(f"## `{name}`\n")
            print(f"![Diagram of {name} data model](./img/{name}.svg)\n")
            print(
                f"<details>\n<summary>Relationship to Other Resources</summary>\n<div>\n"
            )
            print(f"![Diagram of {name} relationship to other resources](./img/{name}_relationships.svg)\n")
            print(f"</div>\n</details>\n")

        sys.stdout = original_stdout


for provider in provider_names:
    if len(by_provider[provider]) > 0:
        if not os.path.exists(f"./{provider}"):
            os.mkdir(f"./{provider}")
        if not os.path.exists(f"./{provider}/img"):
            os.mkdir(f"./{provider}/img")
        export_images(provider)
        print_md(provider)
