---
sidebar_label: AWS Resources
---

# Contributing to AWS Resources

The source code for the AWS resources Resoto collects lives in the [`aws` directory within the `someengineering/resoto` repository on GitHub](https://github.com/someengineering/resoto/tree/main/plugins/aws). All resources are are organised by their respective AWS service under `resoto_plugins_aws/resource`.

Here's a step-by-step breakdown on how we can add another resource for Resoto to collect:

## Generate the models
Resource models are the backbone of the collector. To kickstart support for new resources, there's a nifty tool called `model generator` under [`tools`](https://github.com/someengineering/resoto/tree/main/plugins/aws/tools/model_gen.py). In the `models` dictionary we add the `AwsResotoModel` for the resource we desire and run the script.
There are plenty of examples in the file already for easy reference. The correct `result_shape` can be found in the botocore data in the local `venv`. We're typically looking for a `service-2.json` file. There we will find output shapes for all api calls.
The models are then added to the respective service file. Since there is some variations across different services, it's good practice to check the model; put timestamps, id, name, etc. under their respective property (as defined in the base class).
At the end of each service file there is a list of `AwsResource`s. New resources need to be added here. If we cover a new service, we will need this list [in the collector](https://github.com/someengineering/resoto/blob/main/plugins/aws/resoto_plugin_aws/collector.py).

## Collect additional information
Every `AwsResource` model comes with a `collect()` class method. We can override this method if we need to make additional api calls to get all the information necessary. There are three common scenarios:
1. A two-step collection process, where we can first only retrieve a list of the existing resources and then call for a description for each one. See for example [AwsDynamoDbTable.collect()](https://github.com/someengineering/resoto/blob/705350c7ec1a67a292d2e4c7e5323e4e95769e77/plugins/aws/resoto_plugin_aws/resource/dynamodb.py#L304).
2. Separate collection of tags for a resource, e.g. in [AwsCloudwatchAlarm.collect()](https://github.com/someengineering/resoto/blob/705350c7ec1a67a292d2e4c7e5323e4e95769e77/plugins/aws/resoto_plugin_aws/resource/cloudwatch.py#L169)
3. Dependant resources, where the second one needs an additional api call parameter. One example case is the collection of `Jobs` in AWS Glacier, which are specific to a `Vault`. Their collection can therefore only happen within the collection of the vaults. See [AwsGlacierVault.collect()](https://github.com/someengineering/resoto/blob/705350c7ec1a67a292d2e4c7e5323e4e95769e77/plugins/aws/resoto_plugin_aws/resource/glacier.py#L198)

## Connect to other resources
Once we have collected the resources (and thereby created new nodes in the graph) we need to add edges between connected resources. There are two main ways of doing this:

1. Upon collecting dependant resources (see above Glacier example), we can immediately add an edge between the two resource instances.
2. Every `AwsResource` model comes with a `connect_in_graph()` method. This is where we can define single edges or two-way dependencies:
- see [AwsApiGatewayResource.connect_in_graph()](https://github.com/someengineering/resoto/blob/705350c7ec1a67a292d2e4c7e5323e4e95769e77/plugins/aws/resoto_plugin_aws/resource/apigateway.py#L163) for a single default edge
- see [AwsBeanstalkEnvironment](https://github.com/someengineering/resoto/blob/705350c7ec1a67a292d2e4c7e5323e4e95769e77/plugins/aws/resoto_plugin_aws/resource/elasticbeanstalk.py#L288) for a two-way dependency. `dependant_node` is a shortcut to add both a `default` edge and a `delete` edge. 

In both cases we can control the direction of the edges. To identify the node that we wish to connect to, we use keyword arguments. Most commonly used is the class (`clazz` argument) of the target node and `id`/`name`/`arn` as a distinct identifier. 

All edges that were added to a resource need to be reflected in the `reference_kinds` attribute of the resource class. This is used to make sure no circularity has been introduced. `reference_kinds` is a simple dictionary that contains predecessors and successors along both edges. See [AwsBeanstalkEnvironment.reference_kinds](https://github.com/someengineering/resoto/blob/705350c7ec1a67a292d2e4c7e5323e4e95769e77/plugins/aws/resoto_plugin_aws/resource/elasticbeanstalk.py#L205) as an example.
 

## Add tagging and deletion methods
Resoto offers tagging and deletion for resources with a unified command, regardless of cloud provider or service. To make this possible, these methods need to be implemented for every resource. While the command is the same when using Resoto, they are not all the same when talking to the AWS Api. All existing resources can act as reference, [see here for AwsBeanstalkApplication](https://github.com/someengineering/resoto/blob/705350c7ec1a67a292d2e4c7e5323e4e95769e77/plugins/aws/resoto_plugin_aws/resource/elasticbeanstalk.py#L104-L128).

## Test new resources
Resoto has test coverage for the collector itself and for each service. All tests for the AWS collector are under `resoto/plugins/aws/test`.
1. To test if the collector ends up with the expected number of nodes and edges, update the counters in `collector_test.test_collect()` accordingly.
2. The test suite uses a file based client for api calls. To test if the new resources are complete and mapped correctly, we need to provide sample responses under `plugins/aws/test/resources/files`. These files and the resource tests themselves are again clustered by service. For every "`NewAwsResource`" we implemented, we can do a `round_trip_for(NewAwsResource)`. All existing tests can serve as reference, see [dynamodb_test.py](https://github.com/someengineering/resoto/blob/main/plugins/aws/test/resources/dynamodb_test.py) for example.

## Linting and Code Analysis
Execute `tox` in the terminal from `resoto/plugins/aws` as working directory to run `flake8`, `pytest`, `black` and `mypy`. The same checks happen in CI and are necessary to pass to merge PRs.
