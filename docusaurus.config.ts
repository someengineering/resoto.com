import type { Options as StoredDataOptions } from '@1password/docusaurus-plugin-stored-data';
import type { Options as BlogOptions } from '@docusaurus/plugin-content-blog';
import type { Options as DocsOptions } from '@docusaurus/plugin-content-docs';
import type { Options as PwaOptions } from '@docusaurus/plugin-pwa';
import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import remarkA11yEmoji from '@fec/remark-a11y-emoji';
import type { Options as OpenApiDocsOptions } from 'docusaurus-plugin-openapi-docs';
import { groupBy, sortBy } from 'lodash';
import path from 'path';
import { themes as prismThemes } from 'prism-react-renderer';
import rehypeKatex from 'rehype-katex';
import remarkKroki from 'remark-kroki-plugin';
import remarkMath from 'remark-math';
import { EnumChangefreq } from 'sitemap';
import latestRelease from './latestRelease.json';
import versions from './versions.json';

const isDev = process.env.NODE_ENV === 'development';
const isBuildFast = isDev || !!process.env.BUILD_FAST;
const isProd =
  !isDev && !!process.env.NETLIFY && process.env.CONTEXT !== 'deploy-preview';

const config: Config = {
  title: 'Resoto by Some Engineering Inc.',
  url: 'https://resoto.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  onBrokenAnchors: 'warn',
  favicon: 'img/favicon.ico',
  trailingSlash: false,
  noIndex: !isProd,
  stylesheets: [
    ...[400, 500, 600, 700, 800].map((weight) => ({
      rel: 'preload',
      href: `https://cdn.some.engineering/fonts/Barlow${weight}.woff2`,
      as: 'font',
      type: 'font/woff2',
      crossorigin: true,
    })),
    {
      rel: 'preload',
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      as: 'style',
      type: 'text/css',
      fetchpriority: 'low',
      onload: "this.onload=null;this.rel='stylesheet'",
      crossorigin: true,
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
    },
  ],
  scripts: isProd
    ? [
        {
          src: 'https://resoto.com/js/script.js',
          defer: true,
          'data-domain': 'resoto.com',
        },
      ]
    : [],
  markdown: { mermaid: true },
  themes: ['@docusaurus/theme-mermaid', 'docusaurus-theme-openapi-docs'],
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          async sidebarItemsGenerator({
            defaultSidebarItemsGenerator,
            ...args
          }) {
            const sidebarItems = await defaultSidebarItemsGenerator(args);

            return sidebarItems
              .filter(
                (item) =>
                  (item.type !== 'doc' || !item.id.endsWith('index')) &&
                  (item.type !== 'category' ||
                    item.link?.type !== 'doc' ||
                    !item.link?.id.endsWith('reference/api/index')),
              )
              .map((item) => {
                if (
                  item.type === 'category' &&
                  item.label === 'Command-Line Interface'
                ) {
                  const categoryPosition = [
                    'Search Commands',
                    'Format Commands',
                    'Action Commands',
                    'Setup Commands',
                  ];
                  const miscellaneousCategoryName = 'Other Commands';
                  const groupedItems = groupBy(
                    item.items,
                    (i) => i.customProps?.category ?? miscellaneousCategoryName,
                  );

                  item.items = sortBy(
                    Object.keys(groupedItems).map((categoryName) => ({
                      type: 'category',
                      label: categoryName,
                      items: groupedItems[categoryName],
                    })),
                    (generatedCategory) =>
                      categoryPosition.includes(generatedCategory.label)
                        ? categoryPosition.indexOf(generatedCategory.label)
                        : generatedCategory.label === miscellaneousCategoryName
                          ? categoryPosition.length + 1
                          : categoryPosition.length,
                  );
                }

                return item;
              });
          },
          exclude: ['**/*-rest-api.info.mdx', '**/deprecated-*.mdx'],
          editUrl: ({ versionDocsDirPath, docPath }) =>
            `https://github.com/someengineering/resoto.com/edit/main/${versionDocsDirPath}/${docPath}`,
          showLastUpdateAuthor: false,
          showLastUpdateTime: true,
          remarkPlugins: [
            remarkA11yEmoji,
            ...(!isBuildFast
              ? [
                  [
                    remarkKroki,
                    {
                      krokiBase: 'https://kroki.some.engineering',
                      lang: 'kroki',
                      imgRefDir: '/img/kroki',
                      imgDir: 'static/img/kroki',
                    },
                  ],
                ]
              : []),
          ],
          lastVersion: versions[0],
          versions: {
            current: {
              label: 'edge 🚧',
              path: '/edge',
              banner: 'unreleased',
              badge: false,
            },
            ...versions
              .map((version) =>
                !isBuildFast || version === versions[0]
                  ? {
                      [version]: {
                        label: latestRelease[version].startsWith(
                          version.substring(0, version.indexOf('X')),
                        )
                          ? latestRelease[version]
                          : version,
                        ...(version === versions[0]
                          ? null
                          : { path: `/${version.toLowerCase()}` }),
                      },
                    }
                  : {},
              )
              .reduce((acc, cur) => ({ ...acc, ...cur }), {}),
          },
          docItemComponent: '@theme/ApiItem',
        },
        blog: {
          id: 'releases',
          blogTitle: 'Releases',
          blogDescription: 'Resoto release notes',
          blogSidebarTitle: 'Recent Releases',
          blogSidebarCount: 15,
          postsPerPage: 5,
          path: 'releases',
          routeBasePath: 'releases',
          showReadingTime: false,
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} Some Engineering Inc.`,
          },
          remarkPlugins: [remarkA11yEmoji],
        },
        theme: {
          customCss: [
            './src/css/styles.css',
            './src/css/module-icons.css',
            './src/css/announcement-bar.css',
            './src/css/navbar.css',
            './src/css/footer.css',
            './src/css/docs.css',
            './src/css/tabs.css',
            './src/css/docsearch.css',
            './src/css/openapi-docs.css',
          ],
        },
        sitemap: { changefreq: EnumChangefreq.DAILY, priority: 0.5 },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    function customWebpackConfig() {
      return {
        name: 'custom-webpack-config',
        configureWebpack: () => ({
          module: {
            rules: [
              {
                test: /\.(cast|riv|wasm)$/,
                loader: 'file-loader',
                options: {
                  name: isDev
                    ? '[name].[ext]'
                    : 'assets/[name].[contenthash:8].[ext]',
                },
              },
            ],
          },
        }),
      };
    },
    [
      'content-docs',
      {
        id: 'compare',
        path: 'compare',
        routeBasePath: 'compare',
        sidebarPath: './sidebarsCompare.ts',
        sidebarCollapsible: false,
        editUrl: ({ versionDocsDirPath, docPath }) =>
          `https://github.com/someengineering/resoto.com/edit/main/${versionDocsDirPath}/${docPath}`,
        showLastUpdateAuthor: false,
        showLastUpdateTime: true,
        remarkPlugins: [remarkA11yEmoji, remarkMath],
        rehypePlugins: [rehypeKatex],
      } satisfies DocsOptions,
    ],
    [
      'content-blog',
      {
        id: 'blog',
        blogTitle: 'Blog',
        blogDescription: 'Resoto blog',
        blogSidebarTitle: 'Recent Posts',
        blogSidebarCount: 15,
        postsPerPage: 5,
        path: 'blog',
        routeBasePath: 'blog',
        showReadingTime: true,
        feedOptions: {
          type: 'all',
          copyright: `Copyright © ${new Date().getFullYear()} Some Engineering Inc.`,
        },
        remarkPlugins: [remarkA11yEmoji],
      } satisfies BlogOptions,
    ],
    [
      'content-blog',
      {
        id: 'podcast',
        blogTitle: 'Podcast',
        blogDescription: 'Some Engineering Podcast episodes',
        blogSidebarTitle: 'Recent Episodes',
        blogSidebarCount: 15,
        postsPerPage: 5,
        path: 'podcast',
        routeBasePath: 'podcast',
        showReadingTime: false,
        feedOptions: {
          type: 'all',
          copyright: `Copyright © ${new Date().getFullYear()} Some Engineering Inc.`,
        },
        remarkPlugins: [remarkA11yEmoji, remarkMath],
        rehypePlugins: [rehypeKatex],
      } satisfies BlogOptions,
    ],
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: 'openapi',
        docsPluginId: 'classic',
        config: {
          resotocoreEdge: {
            specPath: 'openapi/resotocore-edge.yml',
            outputDir: `docs/reference/api`,
            sidebarOptions: { groupPathsBy: 'tag', categoryLinkSource: 'tag' },
          },
          ...versions
            .map((version) => ({
              [`resotocore${version.substring(0, version.indexOf('.'))}`]: {
                specPath: `openapi/resotocore-${version}.yml`,
                outputDir: `versioned_docs/version-${version}/reference/api`,
                sidebarOptions: {
                  groupPathsBy: 'tag',
                  categoryLinkSource: 'tag',
                },
              },
            }))
            .reduce((acc, cur) => ({ ...acc, ...cur }), {}),
        },
      } satisfies OpenApiDocsOptions,
    ],
    [
      '@1password/docusaurus-plugin-stored-data',
      {
        data: {
          ...['edge', ...versions]
            .map((version) => ({
              [`aws-${version}-ResotoOrgList`]: path.resolve(
                __dirname,
                'iam/aws',
                version,
                'ResotoOrgList.json',
              ),
              [`aws-${version}-ResotoCollect`]: path.resolve(
                __dirname,
                'iam/aws',
                version,
                'ResotoCollect.json',
              ),
              [`aws-${version}-ResotoMutate`]: path.resolve(
                __dirname,
                'iam/aws',
                version,
                'ResotoMutate.json',
              ),
              [`gcp-${version}-resoto_access`]: path.resolve(
                __dirname,
                'iam/gcp',
                version,
                'resoto_access.json',
              ),
              [`gcp-${version}-resoto_mutate`]: path.resolve(
                __dirname,
                'iam/gcp',
                version,
                'resoto_mutate.json',
              ),
            }))
            .reduce((acc, cur) => ({ ...acc, ...cur }), {}),
        },
      } satisfies StoredDataOptions,
    ],
    [
      'pwa',
      {
        debug: !isProd,
        swRegister: false,
        pwaHead: [
          { tagName: 'link', rel: 'manifest', href: 'site.webmanifest' },
          { tagName: 'link', rel: 'icon', href: 'img/icon-192.maskable.png' },
          { tagName: 'link', rel: 'icon', href: 'img/icon-512.maskable.png' },
          { tagName: 'meta', name: 'theme-color', content: '#af62f5' },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: '#000d19',
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: 'img/apple-icon-180.png',
          },
        ],
      } satisfies PwaOptions,
    ],
  ],
  themeConfig: {
    image:
      'https://og.some.engineering/api/image?theme=resoto&darkMode=0&title=%20&metadata=by%20Some%20Engineering%20Inc.',
    docs: {
      sidebar: { autoCollapseCategories: true },
      versionPersistence: 'none',
    },
    metadata: [
      {
        name: 'description',
        property: 'og:description',
        content:
          'Resoto is a free, open-source infrastructure control plane that continuously monitors and maintains your cloud resources.',
      },
      { property: 'og:type', content: 'website' },
    ],
    tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 5 },
    announcementBar: {
      id: `announcementBar-${latestRelease[versions[0]]}`,
      content: `<span aria-label="star-struck" role="img">🤩</span> <a href="/releases/${
        latestRelease[versions[0]]
      }">Check out what's new in Resoto ${
        latestRelease[versions[0]]
      }</a>, and don't forget to <a href="https://github.com/someengineering/resoto" target="_blank" rel="noopener noreferrer">star the project on GitHub</a>! <span aria-label="sparkles" role="img">✨</span>`,
    },
    navbar: {
      hideOnScroll: true,
      title: 'Resoto',
      logo: { src: 'img/navbar-logo.svg', alt: '', width: 36, height: 36 },
      items: [
        {
          label: 'Modules',
          position: 'right',
          type: 'dropdown',
          items: [
            {
              label: 'ChronoLog',
              to: '/chronolog',
              className: 'module chronolog',
            },
            {
              label: 'CloudScope',
              to: '/cloudscope',
              className: 'module cloudscope',
            },
            {
              label: 'DataLink',
              to: '/datalink',
              className: 'module datalink',
            },
            { label: 'Defrag', to: '/defrag', className: 'module defrag' },
            {
              label: 'InfraSDK',
              to: '/infrasdk',
              className: 'module infrasdk',
            },
            {
              label: 'Inventory',
              to: '/inventory',
              className: 'module inventory',
            },
            {
              label: 'MetricMate',
              to: '/metricmate',
              className: 'module metricmate',
            },
            { label: 'Notify', to: '/notify', className: 'module notify' },
            { label: 'Resolve', to: '/resolve', className: 'module resolve' },
            { label: 'Rewind', to: '/rewind', className: 'module rewind' },
            {
              label: 'Sentinel',
              to: '/sentinel',
              className: 'module sentinel',
            },
            {
              label: 'SpentWise',
              to: '/spentwise',
              className: 'module spentwise',
            },
            {
              label: 'TagGuard',
              to: '/tagguard',
              className: 'module tagguard',
            },
          ],
        },
        {
          label: 'Docs',
          to: '/docs',
          position: 'right',
          type: 'dropdown',
          items: [
            {
              label: 'Overview',
              to: '/docs',
              activeBaseRegex: '/docs(/edge)?$',
              className: 'docs overview',
            },
            {
              label: 'Getting Started',
              to: '/docs/getting-started',
              className: 'docs getting-started',
            },
            {
              label: 'How-To Guides',
              to: '/docs/how-to-guides',
              className: 'docs how-to-guides',
            },
            {
              label: 'Concepts',
              to: '/docs/concepts',
              className: 'docs concepts',
            },
            {
              label: 'Reference',
              to: '/docs/reference',
              className: 'docs reference',
            },
            {
              label: 'Development',
              to: '/docs/development',
              className: 'docs development',
            },
          ],
        },
        { label: 'Pricing', to: '/pricing', position: 'right' },
        { label: 'Compare', to: '/compare', position: 'right' },
        { label: 'Blog', to: '/blog', position: 'right' },
        { label: 'Podcast', to: '/podcast', position: 'right' },
        {
          label: 'GitHub',
          href: 'https://github.com/someengineering/resoto',
          position: 'left',
          className: 'social github',
          'aria-label': 'GitHub',
        },
        {
          label: 'Discord',
          href: 'https://discord.gg/someengineering',
          position: 'left',
          className: 'social discord',
          'aria-label': 'Discord',
        },
        {
          label: 'LinkedIn',
          href: 'https://linkedin.com/company/someengineering',
          position: 'left',
          className: 'social linkedin',
          'aria-label': 'LinkedIn',
        },
        {
          label: 'YouTube',
          href: 'https://youtube.com/@someengineering',
          position: 'left',
          className: 'social youtube',
          'aria-label': 'YouTube',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Modules',
          items: [
            { label: 'ChronoLog', to: '/chronolog' },
            { label: 'CloudScope', to: '/cloudscope' },
            { label: 'DataLink', to: '/datalink' },
            { label: 'Defrag', to: '/defrag' },
            { label: 'InfraSDK', to: '/infrasdk' },
            { label: 'Inventory', to: '/inventory' },
            { label: 'MetricMate', to: '/metricmate' },
            { label: 'Notify', to: '/notify' },
            { label: 'Resolve', to: '/resolve' },
            { label: 'Rewind', to: '/rewind' },
            { label: 'Sentinel', to: '/sentinel' },
            { label: 'SpentWise', to: '/spentwise' },
            { label: 'TagGuard', to: '/tagguard' },
          ],
        },
        {
          title: 'Documentation',
          items: [
            { label: 'Overview', to: '/docs' },
            { label: 'Getting Started', to: '/docs/getting-started' },
            { label: 'How-To Guides', to: '/docs/how-to-guides' },
            { label: 'Concepts', to: '/docs/concepts' },
            { label: 'Reference', to: '/docs/reference' },
            { label: 'Development', to: '/docs/development' },
          ],
        },
        {
          title: 'About',
          items: [
            { label: 'Pricing', to: '/pricing' },
            { label: 'Compare', to: '/compare' },
            { label: 'About', to: '/about' },
            { label: 'Releases', to: '/releases' },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'Blog', to: '/blog' },
            { label: 'Podcast', to: '/podcast' },
            { label: 'Logos', to: '/logos' },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'GitHub', href: 'https://github.com/someengineering' },
            { label: 'Discord', href: 'https://discord.gg/someengineering' },
            {
              label: 'LinkedIn',
              href: 'https://linkedin.com/company/someengineering',
            },
            {
              label: 'YouTube',
              href: 'https://youtube.com/@someengineering',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            { label: 'Privacy Policy', to: '/privacy' },
            { label: 'Terms and Conditions', to: '/terms' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} <a href="https://some.engineering" target="_blank" rel="noopener noreferrer">Some Engineering Inc</a>.`,
    },
    algolia: {
      appId: 'DOGNENB96P',
      apiKey: '0e3e7cbce9da253ee147af5fe2f7d91b',
      indexName: 'resoto',
      contextualSearch: true,
      insights: true,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: [
        'csv',
        'ini',
        'powershell',
        'ruby',
        'csharp',
        'php',
      ],
    },
    magicComments: [
      {
        className: 'theme-code-block-highlighted-line',
        line: 'highlight-next-line',
        block: { start: 'highlight-start', end: 'highlight-end' },
      },
    ],
  } satisfies Preset.ThemeConfig,
};

export default config;
