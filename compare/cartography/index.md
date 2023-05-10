# Resoto vs. Cartography

**Resoto can be used as an alternative to Cartography.**

[Cartography](https://lyft.github.io/cartography) is a Python-based tool developed in-house at [Lyft](https://lyft.com) that consolidates technical assets and the relationships between them in a graph database.

The Lyft security team uses Cartography to visualize security problems and detect vulnerabilities.

## Cartography Use Cases

Cartography is designed for:

- Understanding cloud permission relationships
- Locating vulnerabilities in container images
- Revealing parent-child relationships between images in the form of dependency trees

## Similarities Between Resoto and Cartography

Both Resoto and Cartography:

- Are open-source ([Apache 2.0 license](https://www.apache.org/licenses/LICENSE-2.0))
- Use a [graph database](/docs/concepts/asset-inventory-graph)
- Take [point-in-time snapshots](/docs/concepts/cloud-data-sync) of your infrastructure
- Reveal [parent-child relationships between assets through the graph](/docs/concepts/asset-inventory-graph#edges)
- Support [AWS](/docs/reference/data-models/aws), [Google Cloud](/docs/reference/data-models/google-cloud), [Kubernetes](/docs/reference/data-models/kubernetes), and [GitHub](/docs/reference/data-models/github)

## Differences Between Resoto and Cartography

In general, Cartography was built for security use cases. Since Lyft is an "AWS shop," Cartography prioritizes functionality for AWS services in use at Lyft.

|  | Resoto | Cartography |
| --- | --- | --- |
| **Remediation** | Integrates analytics and governance into a single product to enforce policies and [perform actions on resources](/docs/concepts/resource-management).<br /> Offers [commands](/docs/reference/cli) and [jobs](/docs/concepts/automation#jobs) to automate remediation.<br />Can be used to write custom code and rules for any resource in a cloud-agnostic way. | Only an analytics tool; unable to modify to resources. |
| **User Interface** | Ships with both a [command-line interface](/docs/reference/cli) and [dashboards](/docs/reference/user-interface/dashboards).<br />Dashboards consist of customizable widgets to view resources, metrics, and charts. | Uses [Neo4j Browser](https://neo4j.com/developer/neo4j-browser), which is optimized for [Neo4J](https://neo4j.com) and graph visualization only. |
| **Resources** | Supports over 200 [AWS](/docs/reference/data-models/aws), 60 [Google Cloud](/docs/reference/data-models/google-cloud), and 50 [DigitalOcean](/docs/reference/data-models/digitalocean) resource types. | Only supports about 20 AWS, 5 Azure, 5 Google Cloud, and 3 DigitalOcean resource types. |
| **Data Model** | Uses a [unified data model](/docs/reference/data-models) for all platforms and resources.<br />[Unifying base properties and common abstractions allows you to search, sort, aggregate, and act on a higher level of abstraction and query resources across clouds.](https://some.engineering/blog/2022/09/22/multi-cloud-resource-management-with-resoto) | Has a unique schema for every cloud provider. Writing queries require a specialized understanding of the data model for each service. |
| **Metrics** | Calculates [metrics](/docs/reference/components/metrics) for infrastructure resources and exports them to a time-series database (e.g., [Prometheus](https://prometheus.io)). | Does not offer metrics. |
| **Syntax** | Provides an easy-to-learn [search syntax](/docs/reference/search) developed specifically for infrastructure resources.<br />Resoto's syntax was designed to keep all the benefits of graph traversal while remaining intuitive and versatile. | Uses Neo4j's Cypher query language and is optimized for general graph queries. Cypher is rather complex to learn. |
| **Support** | Users can contact us via the [Some Engineering Discord server](https://discord.gg/someengineering), and we offer commercial support packages to help install, run, and build with Resoto. | The Lyft open-source team answers questions in a public Slack channel.<br />There is no commercial support. |
