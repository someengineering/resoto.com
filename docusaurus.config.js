/* eslint-disable @typescript-eslint/no-var-requires */
// @ts-check

const a11yEmoji = require('@fec/remark-a11y-emoji');
const oembed = require('remark-plugin-oembed');

const latestRelease = require('./latestRelease.json');
const versions = require('./versions.json');

const isProd =
  process.env.NODE_ENV !== 'development' &&
  !!process.env.NETLIFY &&
  process.env.CONTEXT !== 'deploy-preview';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Resoto by Some Engineering Inc.',
  tagline: 'Cloud infrastructure intelligence and automation for humans',
  url: 'https://resoto.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.ico',
  trailingSlash: false,
  stylesheets: [
    {
      rel: 'preload',
      href: 'https://cdn.some.engineering/fonts/Barlow.woff2',
      as: 'font',
      type: 'font/woff2',
      crossorigin: true,
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
            return sidebarItems.filter(
              (item) =>
                (item.type !== 'doc' || !item.id.endsWith('index')) &&
                (item.type !== 'category' ||
                  item.link.type !== 'doc' ||
                  !item.link.id.endsWith('reference/api/index'))
            );
          },
          editUrl: ({ versionDocsDirPath, docPath }) =>
            `https://github.com/someengineering/resoto.com/edit/main/${versionDocsDirPath}/${docPath}`,
          showLastUpdateAuthor: false,
          showLastUpdateTime: true,
          remarkPlugins: [a11yEmoji, oembed],
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
                  label: latestRelease[version].version.startsWith(
                    version.substring(0, version.indexOf('X'))
                  )
                    ? latestRelease[version].version
                    : version,
                },
              }))
              .reduce((acc, cur) => ({ ...acc, ...cur }), {}),
          },
        },
        blog: {
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
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'news',
        blogTitle: 'News',
        blogDescription: 'Resoto release notes and updates',
        blogSidebarTitle: 'Announcements',
        blogSidebarCount: 'ALL',
        path: 'news',
        routeBasePath: 'news',
        archiveBasePath: null,
        showReadingTime: true,
        feedOptions: {
          type: 'all',
          copyright: `Copyright © ${new Date().getFullYear()} Some Engineering Inc.`,
        },
        remarkPlugins: [a11yEmoji],
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
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image:
        'https://resoto-og-image.vercel.app/Cloud%20infrastructure%20intelligence%20and%20automation%20for%20**humans**.png?md=1',
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
        versionPersistence: 'none',
      },
      metadata: [
        {
          name: 'keywords',
          content:
            'resoto, some engineering, sre, cloud, cloud services, cloud providers, aws, amazon web services, gcp, google cloud platform, azure, digitalocean, digital ocean, docker, kubernetes, k8s, devops, prometheus, infrastructure, resource tool, multicloud, metrics, python, terraform, vmware, vsphere, finops, risotto',
        },
      ],
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
      announcementBar: {
        id: `announcementBar-${latestRelease[versions[0]].version}`, // Increment on change
        content: `<span aria-label="star-struck" role="img">🤩</span> <a href="${
          latestRelease[versions[0]].link
        }">Check out what's new in Resoto ${
          latestRelease[versions[0]].version
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
          { to: '/news', label: 'News', position: 'right' },
          { to: '/blog', label: 'Blog', position: 'right' },
          { to: '/about', label: 'About', position: 'right' },
          {
            to: '/docs',
            label: 'Documentation',
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
                label: 'About',
                to: '/about',
              },
              {
                label: 'News',
                to: '/news',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Support',
                to: '/support',
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

module.exports = config;
