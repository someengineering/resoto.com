/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-var-requires */
// @ts-check

const { resolve } = require('path');

const a11yEmoji = require('@fec/remark-a11y-emoji');
const oembed = require('remark-plugin-oembed');
const math = require('remark-math');
const katex = require('rehype-katex');
const kroki = require('remark-kroki-plugin');

const latestRelease = require('./latestRelease.json');
const versions = require('./versions.json');

const isDev = process.env.NODE_ENV === 'development';
const isBuildFast = isDev || !!process.env.BUILD_FAST;
const isProd =
  !isDev && !!process.env.NETLIFY && process.env.CONTEXT !== 'deploy-preview';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Resoto by Some Engineering Inc.',
  url: 'https://resoto.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
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
      href: 'https://unpkg.com/@dotlottie/player-component@1.1.1/dist/dotlottie-player.js',
      as: 'script',
      type: 'text/javascript',
      crossorigin: true,
      integrity:
        'sha384-MCf4N/b9lGYQFSR/8wWWM7jSGPFo36YGoh2+DKbjYCrG7rQYMrP7RAE3UfdQxJ/f',
    },
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
  scripts: [
    {
      src: 'https://unpkg.com/@dotlottie/player-component@1.1.1/dist/dotlottie-player.js',
    },
    ...(isProd
      ? [
          {
            src: 'https://resoto.com/js/script.js',
            defer: true,
            'data-domain': 'resoto.com',
          },
        ]
      : []),
  ],
  markdown: { mermaid: true },
  themes: ['@docusaurus/theme-mermaid', 'docusaurus-theme-openapi-docs'],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          async sidebarItemsGenerator({ defaultSidebarItemsGenerator, ...args }) {
            const sidebarItems = await defaultSidebarItemsGenerator(args);
            return sidebarItems.filter(
              (item) =>
                (item.type !== 'doc' || !item.id.endsWith('index')) &&
                (item.type !== 'category' ||
                  item.link?.type !== 'doc' ||
                  !item.link?.id.endsWith('reference/api/index'))
            );
          },
          exclude: ['**/*-rest-api.info.mdx', '**/deprecated-*.mdx'],
          editUrl: ({ versionDocsDirPath, docPath }) =>
            `https://github.com/someengineering/resoto.com/edit/main/${versionDocsDirPath}/${docPath}`,
          showLastUpdateAuthor: false,
          showLastUpdateTime: true,
          remarkPlugins: [
            a11yEmoji,
            [oembed, { providers: ['youtube'] }],
            ...(!isBuildFast
              ? [
                  [
                    kroki,
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
          docItemComponent: '@theme/ApiItem',
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
                          version.substring(0, version.indexOf('X'))
                        )
                          ? latestRelease[version]
                          : version,
                        ...(version === versions[0]
                          ? null
                          : { path: `/${version.toLowerCase()}` }),
                      },
                    }
                  : {}
              )
              .reduce((acc, cur) => ({ ...acc, ...cur }), {}),
          },
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
          remarkPlugins: [a11yEmoji],
        },
        theme: {
          customCss: [
            require.resolve('./src/css/styles.css'),
            require.resolve('./src/css/announcement-bar.css'),
            require.resolve('./src/css/navbar.css'),
            require.resolve('./src/css/footer.css'),
            require.resolve('./src/css/docs.css'),
            require.resolve('./src/css/tabs.css'),
            require.resolve('./src/css/openapi-docs.css'),
          ],
        },
        sitemap: { changefreq: 'daily', priority: 0.5 },
      }),
    ],
  ],
  plugins: [
    function customWebpackConfig() {
      return {
        name: 'custom-webpack-config',
        configureWebpack: () => ({
          module: {
            rules: [
              { test: /\.cast$/i, type: 'asset/resource' },
              { test: /\.lottie$/, type: 'asset/resource' },
            ],
          },
        }),
      };
    },
    [
      'content-docs',
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: 'compare',
        path: 'compare',
        routeBasePath: 'compare',
        sidebarPath: require.resolve('./sidebarsCompare.js'),
        sidebarCollapsible: false,
        editUrl: ({ versionDocsDirPath, docPath }) =>
          `https://github.com/someengineering/resoto.com/edit/main/${versionDocsDirPath}/${docPath}`,
        showLastUpdateAuthor: false,
        showLastUpdateTime: true,
        remarkPlugins: [a11yEmoji, math],
        rehypePlugins: [katex],
      }),
    ],
    [
      '@docusaurus/plugin-content-blog',
      /** @type {import('@docusaurus/plugin-content-blog').Options} */
      ({
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
        remarkPlugins: [a11yEmoji, [oembed, { providers: ['youtube'] }]],
      }),
    ],
    [
      '@docusaurus/plugin-content-blog',
      /** @type {import('@docusaurus/plugin-content-blog').Options} */
      ({
        id: 'podcast',
        blogTitle: 'Podcast',
        blogDescription: 'Some Engineering Podcast episodes',
        blogSidebarTitle: 'Recent Episodes',
        blogSidebarCount: 10,
        postsPerPage: 5,
        path: 'podcast',
        routeBasePath: 'podcast',
        showReadingTime: false,
        feedOptions: {
          type: 'all',
          copyright: `Copyright © ${new Date().getFullYear()} Some Engineering Inc.`,
        },
        remarkPlugins: [a11yEmoji, [oembed, { providers: ['youtube'] }], math],
        rehypePlugins: [katex],
      }),
    ],
    [
      'docusaurus-plugin-openapi-docs',
      /** @type {import('docusaurus-plugin-openapi-docs').Options} */
      ({
        id: 'openapi',
        docsPluginId: 'classic',
        config: {
          resotocoreEdge: {
            specPath: 'openapi/resotocore-edge.yml',
            outputDir: `docs/reference/api`,
            sidebarOptions: {
              groupPathsBy: 'tag',
              categoryLinkSource: 'tag',
            },
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
      }),
    ],
    [
      '@1password/docusaurus-plugin-stored-data',
      /** @type {import('@1password/docusaurus-plugin-stored-data').Options} */
      ({
        data: {
          ...['edge', ...versions]
            .map((version) => ({
              [`aws-${version}-ResotoOrgList`]: resolve(
                __dirname,
                'aws',
                version,
                'ResotoOrgList.json'
              ),
              [`aws-${version}-ResotoCollect`]: resolve(
                __dirname,
                'aws',
                version,
                'ResotoCollect.json'
              ),
              [`aws-${version}-ResotoMutate`]: resolve(
                __dirname,
                'aws',
                version,
                'ResotoMutate.json'
              ),
            }))
            .reduce((acc, cur) => ({ ...acc, ...cur }), {}),
        },
      }),
    ],
    [
      'pwa',
      // @ts-ignore
      /** @type {import('@docusaurus/plugin-pwa').PluginOptions} */
      ({
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
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
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
        logo: { alt: '', src: 'img/navbar-logo.svg' },
        items: [
          {
            label: 'Modules',
            position: 'right',
            type: 'dropdown',
            items: [
              { label: 'ChronoLog', to: '/chronolog', className: 'module chronolog' },
              { label: 'CloudScope', to: '/cloudscope', className: 'module cloudscope' },
              { label: 'DataLink', to: '/datalink', className: 'module datalink' },
              { label: 'Defrag', to: '/defrag', className: 'module defrag' },
              { label: 'InfraSDK', to: '/infrasdk', className: 'module infrasdk' },
              { label: 'Inventory', to: '/inventory', className: 'module inventory' },
              { label: 'MetricMate', to: '/metricmate', className: 'module metricmate' },
              { label: 'Notify', to: '/notify', className: 'module notify' },
              { label: 'Resolve', to: '/resolve', className: 'module resolve' },
              { label: 'Rewind', to: '/rewind', className: 'module rewind' },
              { label: 'Sentinel', to: '/sentinel', className: 'module sentinel' },
              { label: 'SpentWise', to: '/spentwise', className: 'module spentwise' },
              { label: 'TagGuard', to: '/tagguard', className: 'module tagguard' },
            ],
          },
          {
            label: 'Docs',
            to: '/docs',
            position: 'right',
            type: 'dropdown',
            items: [
              { label: 'Overview', to: '/docs', activeBaseRegex: '/docs(/edge)?$' },
              { label: 'Getting Started', to: '/docs/getting-started' },
              { label: 'How-To Guides', to: '/docs/how-to-guides' },
              { label: 'Concepts', to: '/docs/concepts' },
              { label: 'Reference', to: '/docs/reference' },
              { label: 'Development', to: '/docs/development' },
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
              { label: 'LinkedIn', href: 'https://linkedin.com/company/someengineering' },
              { label: 'YouTube', href: 'https://youtube.com/@someengineering' },
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
        // @ts-ignore
        theme: require('prism-react-renderer').themes.github,
        // @ts-ignore
        darkTheme: require('prism-react-renderer').themes.dracula,
        additionalLanguages: ['csv', 'ini', 'powershell', 'ruby', 'csharp', 'php'],
      },
      magicComments: [
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: { start: 'highlight-start', end: 'highlight-end' },
        },
      ],
    }),
};

module.exports = config;
