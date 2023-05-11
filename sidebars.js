// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  sidebar: [
    {
      type: 'doc',
      id: 'overview',
      label: 'Overview',
    },
    {
      type: 'category',
      label: 'Getting Started',
      link: { type: 'doc', id: 'getting-started/index' },
      items: [
        {
          type: 'autogenerated',
          dirName: 'getting-started',
        },
      ],
    },
    {
      type: 'category',
      label: 'How-To Guides',
      link: { type: 'doc', id: 'how-to-guides/index' },
      items: [
        {
          type: 'autogenerated',
          dirName: 'how-to-guides',
        },
      ],
    },
    {
      type: 'category',
      label: 'Concepts',
      link: { type: 'doc', id: 'concepts/index' },
      items: [
        {
          type: 'autogenerated',
          dirName: 'concepts',
        },
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      link: { type: 'doc', id: 'reference/index' },
      items: [
        {
          type: 'category',
          label: 'API',
          link: { type: 'doc', id: 'reference/api/index' },
          // @ts-ignore
          items: require('./docs/reference/api/sidebar.js')
            .filter(
              (item) => item.type !== 'doc' || !item.id?.endsWith('-rest-api')
            )
            .map((item) =>
              item.items?.length
                ? {
                    ...item,
                    items: item.items.filter(
                      (subItem) =>
                        subItem.type !== 'doc' ||
                        !subItem.id.includes('deprecated-')
                    ),
                  }
                : item
            )
            .sort((a, b) => (a.label ?? '').localeCompare(b.label ?? '')),
        },
        {
          type: 'autogenerated',
          dirName: 'reference',
        },
      ],
    },
    {
      type: 'category',
      label: 'Contributing',
      link: { type: 'doc', id: 'contributing/index' },
      items: [
        {
          type: 'autogenerated',
          dirName: 'contributing',
        },
      ],
    },
  ],
};

module.exports = sidebars;
