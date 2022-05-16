import requests
import urllib3
from collections import defaultdict

core = "https://localhost:8900"
provider_names = ["aws", "gcp", "vsphere", "kubernetes", "digitalocean"]
urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

by_provider = defaultdict(list)
for name, kind in requests.get(f"{core}/model", verify=False).json()["kinds"].items():
  groups = [a for a in provider_names if name.startswith(f"{a}_")]
  if groups:
    by_provider[groups[0]].append(kind)


def export_images(provider: str, path: str = "."):
  for kind in by_provider[provider]:
    name = kind["fqn"]
    print(f"Exporting {name}")
    with open(f"{path}/{provider}/{name}.svg", "w+") as file:
      image = requests.get(f"{core}/model/uml", params={"show": name, "link_classes": "true"}, verify=False)
      file.write(image.text)
    with open(f"{path}/{provider}/{name}_relationships.svg", "w+") as file:
      parms = {"show": name, "dependency": "default", "with_base_classes": "false",
               "with_subclasses": "false", "with_inheritance": "false", "with_predecessors": "true",
               "with_successors": "true", "with_properties": "false", "link_classes": "true"}
      image = requests.get(f"{core}/model/uml", params=parms, verify=False)
      file.write(image.text)


def print_md(provider: str):
  for name in sorted(a["fqn"] for a in by_provider[provider]):
    print(f"## `{name}`\n")
    print(f"![{name}](./img/{provider}/{name}.svg)\n")
    print(f"**Relationships in the graph that shows predecessors and successors of `{name}`:**\n")
    print(f"![{name}](./img/{provider}/{name}_relationships.svg)\n")


# export_images("aws")
# export_images("digitalocean")
export_images("gcp")
# print_md("digitalocean")
