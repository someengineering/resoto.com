/* eslint-disable @typescript-eslint/no-var-requires */
// @ts-check

const { resolve } = require('path');
const { sortBy } = require('lodash');

const a11yEmoji = require('@fec/remark-a11y-emoji');
const oembed = require('remark-plugin-oembed');
const math = require('remark-math');
const katex = require('rehype-katex');

const latestRelease = require('./latestRelease.json');
const versions = require('./versions.json');

module.exports = async function createConfig() {
  const { remarkKroki: kroki } = await import('remark-kroki');

  const isProd =
    process.env.NODE_ENV !== 'development' &&
    !!process.env.NETLIFY &&
    process.env.CONTEXT !== 'deploy-preview';

  /** @type {import('@docusaurus/types').Config} */
  const config = {
    title: 'Resoto by Some Engineering Inc.',
    tagline: 'Data integration for infrastructure engineers',
    url: 'https://resoto.com',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'throw',
    favicon: 'img/favicon.ico',
    trailingSlash: false,
    noIndex: !isProd,
    stylesheets: [
      {
        rel: 'preload',
        href: 'https://cdn.some.engineering/fonts/Barlow100.woff2',
        as: 'font',
        type: 'font/woff2',
        crossorigin: true,
      },
      {
        rel: 'preload',
        href: 'https://cdn.some.engineering/fonts/Barlow200.woff2',
        as: 'font',
        type: 'font/woff2',
        crossorigin: true,
      },
      {
        rel: 'preload',
        href: 'https://cdn.some.engineering/fonts/Barlow300.woff2',
        as: 'font',
        type: 'font/woff2',
        crossorigin: true,
      },
      {
        rel: 'preload',
        href: 'https://cdn.some.engineering/fonts/Barlow400.woff2',
        as: 'font',
        type: 'font/woff2',
        crossorigin: true,
      },
      {
        rel: 'preload',
        href: 'https://cdn.some.engineering/fonts/Barlow500.woff2',
        as: 'font',
        type: 'font/woff2',
        crossorigin: true,
      },
      {
        rel: 'preload',
        href: 'https://cdn.some.engineering/fonts/Barlow600.woff2',
        as: 'font',
        type: 'font/woff2',
        crossorigin: true,
      },
      {
        rel: 'preload',
        href: 'https://cdn.some.engineering/fonts/Barlow700.woff2',
        as: 'font',
        type: 'font/woff2',
        crossorigin: true,
      },
      {
        rel: 'preload',
        href: 'https://cdn.some.engineering/fonts/Barlow800.woff2',
        as: 'font',
        type: 'font/woff2',
        crossorigin: true,
      },
      {
        rel: 'preload',
        href: 'https://cdn.some.engineering/fonts/Barlow900.woff2',
        as: 'font',
        type: 'font/woff2',
        crossorigin: true,
      },
      {
        href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
        type: 'text/css',
        integrity:
          'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
        crossorigin: 'anonymous',
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
    markdown: {
      mermaid: true,
    },
    themes: ['@docusaurus/theme-mermaid', 'docusaurus-theme-openapi-docs'],
    presets: [
      [
        'classic',
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            sidebarPath: require.resolve('./sidebars.js'),
            async sidebarItemsGenerator({
              defaultSidebarItemsGenerator,
              ...args
            }) {
              const sidebarItems = await defaultSidebarItemsGenerator(args);
              return sortBy(
                sidebarItems.filter(
                  (item) =>
                    (item.type !== 'doc' || !item.id.endsWith('index')) &&
                    (item.type !== 'category' ||
                      item.link?.type !== 'doc' ||
                      !item.link?.id.endsWith('reference/api/index'))
                ),
                ['label']
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
              [kroki, { server: 'https://kroki.io', alias: ['plantuml'] }],
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
                .map((version) => ({
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
                }))
                .reduce((acc, cur) => ({ ...acc, ...cur }), {}),
            },
          },
          blog: {
            id: 'releases',
            blogTitle: 'Releases',
            blogDescription: 'Resoto release notes',
            blogSidebarTitle: 'Releases',
            blogSidebarCount: 'ALL',
            path: 'releases',
            routeBasePath: 'releases',
            archiveBasePath: null,
            showReadingTime: false,
            feedOptions: {
              type: 'all',
              copyright: `Copyright © ${new Date().getFullYear()} Some Engineering Inc.`,
            },
            remarkPlugins: [a11yEmoji],
          },
          theme: {
            customCss: [
              require.resolve('./src/css/custom.css'),
              require.resolve('./src/css/docusaurus-plugin-openapi-docs.css'),
            ],
          },
          sitemap: {
            changefreq: 'daily',
            priority: 0.5,
          },
        }),
      ],
    ],
    plugins: [
      function customWebpackConfig() {
        return {
          name: 'custom-webpack-config',
          configureWebpack: () => ({
            module: {
              rules: [{ test: /\.cast$/, use: 'url-loader' }],
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
        {
          id: 'blog',
          blogTitle: 'Blog',
          blogDescription: 'Resoto blog',
          blogSidebarTitle: 'Posts',
          blogSidebarCount: 'ALL',
          path: 'blog',
          archiveBasePath: null,
          routeBasePath: 'blog',
          showReadingTime: true,
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} Some Engineering Inc.`,
          },
          remarkPlugins: [a11yEmoji, [oembed, { providers: ['youtube'] }]],
        },
      ],
      [
        '@docusaurus/plugin-content-blog',
        {
          id: 'podcast',
          blogTitle: 'Podcast',
          blogDescription: 'Some Engineering Inc. podcast episodes',
          blogSidebarTitle: 'Episodes',
          blogSidebarCount: 'ALL',
          path: 'podcast',
          routeBasePath: 'podcast',
          archiveBasePath: null,
          showReadingTime: false,
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} Some Engineering Inc.`,
          },
          remarkPlugins: [
            a11yEmoji,
            [oembed, { providers: ['youtube'] }],
            math,
          ],
          rehypePlugins: [katex],
        },
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
        },
      ],
      [
        '@1password/docusaurus-plugin-stored-data',
        /** @type {import('@1password/docusaurus-plugin-stored-data').Options} */
        {
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
        },
      ],
      [
        'pwa',
        /** @type {import('@docusaurus/plugin-pwa').PluginOptions} */
        {
          debug: !isProd,
          swRegister: false,
          swCustom: require.resolve('./src/sw.js'),
          pwaHead: [
            {
              tagName: 'link',
              rel: 'manifest',
              href: 'site.webmanifest',
            },
            {
              tagName: 'link',
              rel: 'icon',
              href: 'img/icon-192.maskable.png',
            },
            {
              tagName: 'link',
              rel: 'icon',
              href: 'img/icon-512.maskable.png',
            },
            {
              tagName: 'meta',
              name: 'theme-color',
              content: '#af62f5',
            },
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
        },
      ],
    ],
    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        image:
          'https://og.some.engineering/api/image?theme=resoto&darkMode=0&title=%20&metadata=by%20Some%20Engineering%20Inc.',
        docs: {
          sidebar: {
            autoCollapseCategories: true,
          },
          versionPersistence: 'none',
        },
        metadata: [
          {
            name: 'description',
            property: 'og:description',
            content:
              'Resoto consolidates resource data across your clouds, regions, and accounts. Open source and free to use.',
          },
          {
            property: 'og:type',
            content: 'website',
          },
        ],
        tableOfContents: {
          minHeadingLevel: 2,
          maxHeadingLevel: 5,
        },
        announcementBar: {
          id: `announcementBar-${latestRelease[versions[0]]}`, // Increment on change
          content: `<span aria-label="star-struck" role="img">🤩</span> <a href="/releases/${
            latestRelease[versions[0]]
          }">Check out what's new in Resoto ${
            latestRelease[versions[0]]
          }</a>, and don't forget to <a href="https://github.com/someengineering/resoto" target="_blank" rel="noopener noreferrer">star the project on GitHub</a>! <span aria-label="sparkles" role="img">✨</span>`,
        },
        navbar: {
          hideOnScroll: true,
          title: 'Resoto',
          logo: {
            alt: '',
            src: 'img/navbar-logo.svg',
          },
          items: [
            {
              label: 'Releases',
              to: '/releases',
              position: 'right',
            },
            {
              label: 'Docs',
              to: '/docs',
              position: 'right',
              type: 'dropdown',
              items: [
                {
                  label: 'Getting Started',
                  to: '/docs/getting-started',
                },
                {
                  label: 'How-To Guides',
                  to: '/docs/how-to-guides',
                },
                {
                  label: 'Concepts',
                  to: '/docs/concepts',
                },
                {
                  label: 'Reference',
                  to: '/docs/reference',
                },
                {
                  label: 'Contributing',
                  to: '/docs/contributing',
                },
              ],
            },
            {
              label: 'Compare',
              to: '/compare',
              position: 'right',
            },
            {
              label: 'Blog',
              href: '/blog',
              position: 'right',
            },
            {
              label: 'Podcast',
              to: '/podcast',
              position: 'right',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/someengineering/resoto',
              position: 'left',
              className: 'navbar-icon-link navbar-github-link',
              'aria-label': 'GitHub',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/someengineering',
              position: 'left',
              className: 'navbar-icon-link navbar-discord-link',
              'aria-label': 'Discord',
            },
            {
              label: 'LinkedIn',
              href: 'https://linkedin.com/company/someengineering',
              position: 'left',
              className: 'navbar-icon-link navbar-linkedin-link',
              'aria-label': 'LinkedIn',
            },
          ],
        },
        footer: {
          style: 'dark',
          links: [
            {
              title: 'Documentation',
              items: [
                {
                  label: 'Getting Started',
                  to: '/docs/getting-started',
                },
                {
                  label: 'How-To Guides',
                  to: '/docs/how-to-guides',
                },
                {
                  label: 'Concepts',
                  to: '/docs/concepts',
                },
                {
                  label: 'Reference',
                  to: '/docs/reference',
                },
                {
                  label: 'Contributing',
                  to: '/docs/contributing',
                },
              ],
            },
            {
              title: 'Community',
              items: [
                {
                  label: 'Code of Conduct',
                  to: '/code-of-conduct',
                },
                {
                  label: 'GitHub',
                  href: 'https://github.com/someengineering',
                },
                {
                  label: 'Discord',
                  href: 'https://discord.gg/someengineering',
                },
                {
                  label: 'LinkedIn',
                  href: 'https://linkedin.com/company/someengineering',
                },
              ],
            },
            {
              title: 'More',
              items: [
                {
                  label: 'Releases',
                  to: '/releases',
                },
                {
                  label: 'Compare',
                  to: '/compare',
                },
                {
                  label: 'About',
                  to: '/about',
                },
                {
                  label: 'Blog',
                  to: '/blog',
                },
                {
                  label: 'Logos',
                  to: '/logos',
                },
              ],
            },
            {
              title: 'Legal',
              items: [
                {
                  label: 'Privacy Policy',
                  to: '/privacy',
                },
                {
                  label: 'Terms and Conditions',
                  to: '/terms',
                },
              ],
            },
          ],
          copyright: `<span aria-label="owl" role="img">🦉</span> Copyright © ${new Date().getFullYear()} <a href="https://some.engineering" target="_blank" rel="noopener noreferrer">Some Engineering Inc</a>. Built with <a href="https://docusaurus.io" target="_blank" rel="noopener noreferrer">Docusaurus</a>. <span aria-label="dinosaur" role="img">🦖</span>`,
        },
        algolia: {
          appId: 'DOGNENB96P',
          apiKey: '0e3e7cbce9da253ee147af5fe2f7d91b',
          indexName: 'resoto',
          contextualSearch: true,
        },
        prism: {
          theme: require('prism-react-renderer/themes/github'),
          darkTheme: require('./src/utils/prismDark.js'),
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
      }),
  };

  return config;
};
