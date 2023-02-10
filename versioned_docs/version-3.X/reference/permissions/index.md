# Permissions

```mdx-code-block
import DocCardList from '@theme/DocCardList';
```

To use Resoto with all it's features—including cleanup—it requires wide permissions to collect resources, perform tag validations and updates, as well as delete resources.

To use Resoto in a read-only capacity, you can limit access to your cloud provider accordingly.

:::info

Resoto will not delete resources marked for deletion by default, even with the neccessary permissions.

Resoto will silently ignore collecting specific resources if it does not have the required permissions.

:::

<DocCardList />
