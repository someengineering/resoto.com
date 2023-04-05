---
sidebar_label: Update a Kubernetes based Resoto installation
---

# Update a Kubernetes based Resoto installation

For Kubernetes based installation we provide a [helm chart](https://github.com/someengineering/helm-charts/tree/main/someengineering/resoto). We use [`helm upgrade`](https://helm.sh/docs/helm/helm_upgrade/) to upgrade Resoto.

## Prerequisites

- [Helm](https://helm.sh) (version 3 or above)
- Access to the Kubernetes cluster with a running installation

## Directions

1. Make sure you have access to your Resoto installation.

   ```bash
   $ helm list
   NAME  	NAMESPACE	REVISION	UPDATED    	STATUS  	CHART       	APP VERSION
   resoto	resoto   	8       	2023-04-04	deployed	resoto-0.7.4	3.3.1
   ```

   The `APP Version` reflects the currently installed version of Resoto.

2. Make sure that the [Some Engineering Helm chart repository](https://helm.some.engineering) is available:
   ```bash
   $ helm repo add someengineering https://helm.some.engineering
   ```
3. Update cached chart information:

   ```bash
   $ helm repo update
   ```

4. Install the latest available Resoto release.
   ```bash
   $ helm upgrade resoto someengineering/resoto --atomic --reuse-values --set image.tag={{imageTag}}
   ```
   Please note: `--reuse-values` will use the same values that you provided for installation. You can pass a different values.yaml file, if you want to change the configuration. A list of [all configuration parameters](https://github.com/someengineering/helm-charts/tree/main/someengineering/resoto) is defined in the chart repository.
