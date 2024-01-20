import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  sidebar: [
    {
      type: 'doc',
      id: 'overview',
      label: 'Overview',
      // className: 'docs overview',
    },
    {
      type: 'category',
      label: 'Getting Started',
      link: { type: 'doc', id: 'getting-started/index' },
      items: [{ type: 'autogenerated', dirName: 'getting-started' }],
      // className: 'docs getting-started',
    },
    {
      type: 'category',
      label: 'How-To Guides',
      link: { type: 'doc', id: 'how-to-guides/index' },
      items: [{ type: 'autogenerated', dirName: 'how-to-guides' }],
      // className: 'docs how-to-guides',
    },
    {
      type: 'category',
      label: 'Concepts',
      link: { type: 'doc', id: 'concepts/index' },
      items: [{ type: 'autogenerated', dirName: 'concepts' }],
      // className: 'docs concepts',
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
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          items: require('./docs/reference/api/sidebar.ts')
            .filter(
              (item) => item.type !== 'doc' || !item.id?.endsWith('-rest-api'),
            )
            .map((item) =>
              item.items?.length
                ? {
                    ...item,
                    items: item.items.filter(
                      (subItem) =>
                        subItem.type !== 'doc' ||
                        !subItem.id.includes('deprecated-'),
                    ),
                  }
                : item,
            )
            .sort((a, b) => (a.label ?? '').localeCompare(b.label ?? '')),
        },
        { type: 'autogenerated', dirName: 'reference' },
      ],
      // className: 'docs reference',
    },
    {
      type: 'category',
      label: 'Development',
      link: { type: 'doc', id: 'development/index' },
      items: [{ type: 'autogenerated', dirName: 'development' }],
      // className: 'docs development',
    },
  ],
};

export default sidebars;
