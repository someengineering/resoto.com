---
sidebar_label: AWS Collector
---

# Contributing to the AWS Collector

The AWS collector source code lives in the [`plugins/aws` directory within the `someengineering/resoto` repository on GitHub](https://github.com/someengineering/resoto/tree/main/plugins/aws).

## Adding New Resources

Resource definitions are organized by service within `resoto_plugins_aws/resource`.

Here's a step-by-step breakdown on how to add a new resource to the AWS collector:

1. **Generate the models.**

   Resource models are the backbone of the collector. To kickstart support for new resources, there's a nifty [`model_gen` tool](https://github.com/someengineering/resoto/tree/main/plugins/aws/tools/model_gen.py).

   1. In the `models` dictionary, we add the `AwsResotoModel` for the desired resource and run the script. There are plenty of examples in the file already for easy reference.
   2. The correct `result_shape` can be found in the Botocore data in the local `venv`, typically in a file called `service-2.json` where output shapes for all API calls are listed.
   3. The models are then added to the respective service file under `plugins/aws/resoto_plugin_aws/resource`.
   4. Since there is variation across different AWS services, it's good practice to verify the auto-generated model. Put timestamps, id, name, etc. under the respective properties as defined in the base classes `AwsResource` and `BaseResource`.
   5. At the end of each service file, there is a list of `AwsResource`s. New resources should be added here. If a new service is implemented, this list also needs to be added to [ collector.py in the parent directory](https://github.com/someengineering/resoto/blob/main/plugins/aws/resoto_plugin_aws/collector.py).

2. **Collect additional information.**

   Every `AwsResource` model comes with a `collect()` class method. This method can be overridden if we need to make additional API calls to get all the information.

   There are three common scenarios:

   1. **A two-step collection process**, where first only a list of the existing resources can be retrieved and then follow-up API call get a description for each one. See for example [AwsDynamoDbTable.collect()](https://github.com/someengineering/resoto/blob/705350c7ec1a67a292d2e4c7e5323e4e95769e77/plugins/aws/resoto_plugin_aws/resource/dynamodb.py#L304).

   2. **Separate collection of tags for a resource**, e.g. in [`AwsCloudwatchAlarm.collect()`](https://github.com/someengineering/resoto/blob/705350c7ec1a67a292d2e4c7e5323e4e95769e77/plugins/aws/resoto_plugin_aws/resource/cloudwatch.py#L169)

   3. **Dependent resources**, where the second one needs an additional API call parameter. One example case is the collection of `Jobs` in AWS Glacier, which are specific to a `Vault`. Their collection can therefore only happen within the collection of the vaults. See [`AwsGlacierVault.collect()`](https://github.com/someengineering/resoto/blob/705350c7ec1a67a292d2e4c7e5323e4e95769e77/plugins/aws/resoto_plugin_aws/resource/glacier.py#L198).

3. **Connect to other resources.**

   Once the new resource(s) are being collected (and new nodes in the graph have been created), edges representing the relationships between connected resources need to be added as well.

   There are two ways to add these connections:

   1. Upon collecting dependent resources, edges between the two resource instances can be added immediately.

   2. Each `AwsResource` model has a `connect_in_graph()` method in which connections can be defined.

   :::info

   - See [`AwsApiGatewayResource.connect_in_graph()`](https://github.com/someengineering/resoto/blob/705350c7ec1a67a292d2e4c7e5323e4e95769e77/plugins/aws/resoto_plugin_aws/resource/apigateway.py#L163) for defining a single default edge.
   - See [`AwsBeanstalkEnvironment`](https://github.com/someengineering/resoto/blob/705350c7ec1a67a292d2e4c7e5323e4e95769e77/plugins/aws/resoto_plugin_aws/resource/elasticbeanstalk.py#L288) for defining a two-way edge. `dependant_node` is a shortcut to add both a `default` edge and a `delete` edge.
   - Deletion edges are necessary when one of the two resources can't be deleted while the other one is still around.
   - In both cases the direction of the edges can be manipulated by using the `reverse` and/or `delete_same_as_default` parameters.
   - The target node of an edge is identified by keyword arguments. Most commonly used is the class (`clazz`) of the target node and `id`/`name`/`arn` as a distinct identifier.
   - All edges that were added to a resource need to be reflected in the `reference_kinds` attribute of the resource class. This is used to make sure no circularity has been introduced. `reference_kinds` is a simple dictionary that contains predecessors and successors along both edges. See [`AwsBeanstalkEnvironment.reference_kinds`](https://github.com/someengineering/resoto/blob/705350c7ec1a67a292d2e4c7e5323e4e95769e77/plugins/aws/resoto_plugin_aws/resource/elasticbeanstalk.py#L205) as an example.

   :::

4. **Add tagging and deletion methods.**

   Resoto offers tagging and deletion for resources with a unified command that is provider- and service-agnostic. To make this possible, these methods need to be implemented for each resource.

   Please refer to existing resources for examples, e.g., [`AwsBeanstalkApplication`](https://github.com/someengineering/resoto/blob/705350c7ec1a67a292d2e4c7e5323e4e95769e77/plugins/aws/resoto_plugin_aws/resource/elasticbeanstalk.py#L104-L128).

5. **Test the new resources.**

   Resoto has test coverage for the collector itself and for each service. Tests for the AWS collector are located within the [`test` directory](https://github.com/someengineering/resoto/tree/main/plugins/aws/test).

   1. To verify if the collector produces the expected number of nodes and edges, update the counters in `collector_test.test_collect()`.

   2. The test suite uses a file-based client for API calls. To verify if the new resources are complete and mapped correctly, provide sample responses in the [`test/resources/files` directory](https://github.com/someengineering/resoto/tree/main/plugins/aws/test/resources/files).

      These files and the resource tests are clustered by service, similar to how resource definitions are organized in `resoto_plugins_aws/resource`. For every "`NewAwsResource`" we implemented, we can do a `round_trip_for(NewAwsResource)`. All existing tests can serve as reference, see [`dynamodb_test.py`](https://github.com/someengineering/resoto/blob/main/plugins/aws/test/resources/dynamodb_test.py) for example.

6. **Lint and analyze code.**

   Execute `tox` in the terminal from `resoto/plugins/aws` as working directory to run `flake8`, `pytest`, `black`, and `mypy`. These checks are required for CI to pass and PRs to be merged.
