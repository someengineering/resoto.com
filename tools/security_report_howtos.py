
import os
import os.path
import time
from collections import defaultdict
from itertools import takewhile
from typing import Dict, List, Any

import requests
import urllib3
from requests import Response
from requests.adapters import HTTPAdapter
from urllib3.exceptions import InsecureRequestWarning
from urllib3.util import Retry
urllib3.disable_warnings(InsecureRequestWarning)

core = "https://localhost:8900"


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

service_names = {
    "rds": "RDS",
    "iam": "IAM",
    "cloudtrail": "CloudTrail",
    "s3": "S3",
    "ec2": "EC2",
    "apigateway": "API Gateway",
    "config": "Config",
    "efs": "EFS",
    "kms": "KMS",
    "lambda": "Lambda",

}
def howto_from_command(check: dict, command: str) -> None:
    provider = check["provider"].upper()
    service = service_names[check["service"]]
    name = f'fix-'+check["id"].replace("_", "-")
    title = check["title"].strip(".")
    risk = check["risk"].replace(";", ",")
    result_kind = check["result_kind"]
    result_kind_short = result_kind.split("_", 2)[-1]
    remediation = check["remediation"]["text"].strip(".").replace(";", ",")
    remediation_url = check["remediation"]["url"]
    severity = check["severity"]

    text=f"""---
sidebar_label: Fix {provider} {service} {title.replace(":", "")}
---
# How to fix {provider} {service} {result_kind_short} with {title}

Resoto builds a cloud asset inventory by collecting resource metadata from cloud providers.
This inventory is used to detect security and compliance issues.

## Security Considerations

This check is part of the [CIS Amazon Web Services Benchmarks](https://www.cisecurity.org/benchmark/amazon_web_services) and is rated with severity **{severity}**.

#### Risk

{risk}
The following search command will find [`{result_kind}` resources](../../reference/data-models/aws/index.md#{result_kind}) that are not compliant. It is recommended to adapt the configuration of matching resource to be compliant.

#### Remediation

{remediation}. See [provider specific documentation]({remediation_url}) for more details.

## Prerequisites

This guide assumes that you have already [installed](../../getting-started/install-resoto/index.md) and configured Resoto to [collect your cloud resources](../../getting-started/configure-resoto/index.md).
The following command can be executed either from the [Resoto Shell](../../reference/components/shell.md) or from the Resoto WebUI.

## Directions

1. Execute the [`search` command](../../reference/cli/search-commands/search.md) in [Resoto Shell](../../reference/components/shell.md) or WebUI:
   ```bash
   > {command}
   # highlight-start
   ​kind={result_kind}, ..., region=resoto-poweruser
   ​kind={result_kind}, ..., account=poweruser-team
   # highlight-end
   ```
2. To view resource details, pipe the previous command into the [`dump` command](../../reference/cli/format-commands/dump.md):
   ```bash
   > {command} | dump
   # highlight-start
   ​reported:
   ​  id: /aws/{check['service']}/123
   ​  name: some-name
   ​  ctime: '2022-12-05T22:53:14Z'
   ​  kind: {result_kind}
   ​  age: 2mo28d
   # highlight-end
   ```
3. {remediation}. See [provider specific documentation]({remediation_url}) for more details.

## Further Reading

- [Search](../../reference/search/index.md)
- [Command-Line Interface](../../reference/cli/index.md)
- [Data Model for `{result_kind}`](../../reference/data-models/aws/index.md#{result_kind})
- [CIS Amazon Web Services Benchmarks](https://www.cisecurity.org/benchmark/amazon_web_services)
- [Provider specific documentation]({remediation_url})
"""
    with open(f"../docs/how-to-guides/security/{name}.md", "w") as f:
        f.write(text)


if __name__ == "__main__":
    for check_json in get_url("https://localhost:8900/report/checks", params={"category": "security"}).json():
        detect = check_json["detect"]
        if detect.get("resoto"):
            howto_from_command(check_json, "search "+detect["resoto"])
        elif detect.get("resoto_cmd"):
            howto_from_command(check_json, detect["resoto_cmd"])
