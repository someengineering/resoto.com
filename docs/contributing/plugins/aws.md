---
sidebar_label: AWS Resources
---

# Contributing to AWS Resources

The source code for the AWS resources Resoto collects lives in the [`aws` directory within the `someengineering/resoto` repository on GitHub](https://github.com/someengineering/resoto/tree/main/plugins/aws). All resources are are organised by their respective AWS service under `resoto_plugins_aws/resource`.

Here's a step-by-step breakdown on how we can add another resource for Resoto to collect:

## Generate the models

Resource models are the backbone of the collector. To kickstart support for new resources, there's a nifty tool called `model generator` under [`tools`](https://github.com/someengineering/resoto/tree/main/plugins/aws/tools/model_gen.py).

- In the `models` dictionary we add the `AwsResotoModel` for the desired resource and run the script. There are plenty of examples in the file already for easy reference.
- The correct `result_shape` can be found in the botocore data in the local `venv`. Typically in a file called `service-2.json`, where output shapes for all api calls are listed.
- The models are then added to the respective service file under `plugins/aws/resoto_plugin_aws/resource`. -Since there is variation across different AWS services, it's good practice to check the auto-generated model: put timestamps, id, name, etc. under their respective property (as defined in the base classes `AwsResource` and `BaseResource`).
- At the end of each service file there is a list of `AwsResource`s. New resources need to be added here. If a new service is implemented, this list needs to be added [to the collector](https://github.com/someengineering/resoto/blob/main/plugins/aws/resoto_plugin_aws/collector.py).

## Collect additional information

Every `AwsResource` model comes with a `collect()` class method. This method can be overridden if we need to make additional api calls to get all the information. There are three common scenarios:

1. A two-step collection process, where first only a list of the existing resources can be retrieved and then follow-up api call get a description for each one. See for example [AwsDynamoDbTable.collect()](https://github.com/someengineering/resoto/blob/705350c7ec1a67a292d2e4c7e5323e4e95769e77/plugins/aws/resoto_plugin_aws/resource/dynamodb.py#L304).
2. Separate collection of tags for a resource, e.g. in [AwsCloudwatchAlarm.collect()](https://github.com/someengineering/resoto/blob/705350c7ec1a67a292d2e4c7e5323e4e95769e77/plugins/aws/resoto_plugin_aws/resource/cloudwatch.py#L169)
3. Dependant resources, where the second one needs an additional api call parameter. One example case is the collection of `Jobs` in AWS Glacier, which are specific to a `Vault`. Their collection can therefore only happen within the collection of the vaults. See [AwsGlacierVault.collect()](https://github.com/someengineering/resoto/blob/705350c7ec1a67a292d2e4c7e5323e4e95769e77/plugins/aws/resoto_plugin_aws/resource/glacier.py#L198)

## Connect to other resources

Once the resources are being collected (and thereby new nodes in the graph are created), edges between connected resources need to be established. There are two main ways of doing this:

1. Upon collecting dependant resources (see above Glacier example), edges between the two resource instances can be added immediately.
2. Every `AwsResource` model comes with a `connect_in_graph()` method in which connections can be defined.

- see [AwsApiGatewayResource.connect_in_graph()](https://github.com/someengineering/resoto/blob/705350c7ec1a67a292d2e4c7e5323e4e95769e77/plugins/aws/resoto_plugin_aws/resource/apigateway.py#L163) for defining a single default edge
- see [AwsBeanstalkEnvironment](https://github.com/someengineering/resoto/blob/705350c7ec1a67a292d2e4c7e5323e4e95769e77/plugins/aws/resoto_plugin_aws/resource/elasticbeanstalk.py#L288) for defining a two-way edge. `dependant_node` is a shortcut to add both a `default` edge and a `delete` edge.
- Deletion edges are necessary when one of the two resources can't be deleted while the other one is still around.
- In both cases the direction of the edges can be manipulated by using the `reverse` and/or `delete_same_as_default` parameters.
- The target node of an edge is identified by keyword arguments. Most commonly used is the class (`clazz`) of the target node and `id`/`name`/`arn` as a distinct identifier.
- All edges that were added to a resource need to be reflected in the `reference_kinds` attribute of the resource class. This is used to make sure no circularity has been introduced. `reference_kinds` is a simple dictionary that contains predecessors and successors along both edges. See [AwsBeanstalkEnvironment.reference_kinds](https://github.com/someengineering/resoto/blob/705350c7ec1a67a292d2e4c7e5323e4e95769e77/plugins/aws/resoto_plugin_aws/resource/elasticbeanstalk.py#L205) as an example.

## Add tagging and deletion methods

Resoto offers tagging and deletion for resources with a unified command, regardless of cloud provider or service. To make this possible, these methods need to be implemented for every resource. While the command is the same when using Resoto, they are not all the same when talking to the AWS Api. All existing resources can act as reference, [see here for AwsBeanstalkApplication](https://github.com/someengineering/resoto/blob/705350c7ec1a67a292d2e4c7e5323e4e95769e77/plugins/aws/resoto_plugin_aws/resource/elasticbeanstalk.py#L104-L128).

## Test new resources

Resoto has test coverage for the collector itself and for each service. All tests for the AWS collector are under `resoto/plugins/aws/test`.

1. To test if the collector ends up with the expected number of nodes and edges, update the counters in `collector_test.test_collect()` accordingly.
2. The test suite uses a file based client for api calls. To test if the new resources are complete and mapped correctly, we need to provide sample responses under `plugins/aws/test/resources/files`. These files and the resource tests themselves are again clustered by service. For every "`NewAwsResource`" we implemented, we can do a `round_trip_for(NewAwsResource)`. All existing tests can serve as reference, see [dynamodb_test.py](https://github.com/someengineering/resoto/blob/main/plugins/aws/test/resources/dynamodb_test.py) for example.

## Linting and Code Analysis

Execute `tox` in the terminal from `resoto/plugins/aws` as working directory to run `flake8`, `pytest`, `black` and `mypy`. The same checks happen in CI and are necessary to pass to merge PRs.
