import requests
from collections import defaultdict

core = "http://localhost:8900"
provider_names = ["aws", "gcp", "vsphere", "kubernetes", "digitalocean"]

by_provider = defaultdict(list)
for name, kind in requests.get(f"{core}/model").json()["kinds"].items():
    groups = [a for a in provider_names if name.startswith(f"{a}_")]
    if groups:
        by_provider[groups[0]].append(kind)


def export_images(provider: str, path: str = "."):
    for kind in by_provider[provider]:
        name = kind["fqn"]
        image = requests.get(f"{core}/model/uml", params={"show": name})
        with open(f"{path}/{provider}/{name}.svg", "w+") as file:
            file.write(image.text)


def print_md(provider: str):
    for name in sorted(a["fqn"] for a in by_provider[provider]):
        print(f"## `{name}`\n")
        print(f"![{name}](./img/{provider}/{name}.svg)\n")


#export_images(".")
print_md("digitalocean")
