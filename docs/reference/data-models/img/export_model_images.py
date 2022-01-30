import requests

core = "http://localhost:8900"
kinds = requests.get(f"{core}/model").json()["kinds"]


def export_images(path: str):
    filter_out = ["aws", "gcp"]
    for name, kind in kinds.items():
        if [a for a in filter_out if name.startswith(f"{a}_")]:
            image = requests.get(f"{core}/model/uml", params={"show": name})
            with open(f"{path}/{a}/{name}.svg", "w+") as file:
                file.write(image.text)


def print_md(cloud: str):
    for name in sorted(kinds):
        if name.startswith(cloud):
            print(f"## `{name}`\n")
            print(f"![{name}](./img/{cloud}/{name}.svg)\n")


export_images(".")
