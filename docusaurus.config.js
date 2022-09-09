/* eslint-disable @typescript-eslint/no-var-requires */
// @ts-check

const a11yEmoji = require('@fec/remark-a11y-emoji');
const oembed = require('remark-plugin-oembed');
const mdxMermaid = require('mdx-mermaid');

const latestRelease = require('./latestRelease.json');
const versions = require('./versions.json');

const isProd =
  process.env.NODE_ENV !== 'development' &&
  !!process.env.NETLIFY &&
  process.env.CONTEXT !== 'deploy-preview';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Resoto by Some Engineering Inc.',
  tagline: 'Automate tedious infrastructure tasks, remarkably fast.',
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
  presets: [
    [
      'redocusaurus',
      {
        specs: [
          {
            id: 'resotocore',
            spec: 'openapi/resotocore.yml',
          },
          {
            id: 'resotocore-edge',
            spec: 'openapi/resotocore-edge.yml',
          },
        ],
        theme: {
          primaryColor: '#762dd7',
          primaryColorDark: '#af62f5',
        },
      },
    ],
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: ({ versionDocsDirPath, docPath }) =>
            `https://github.com/someengineering/resoto.com/edit/main/${versionDocsDirPath}/${docPath}`,
          showLastUpdateAuthor: false,
          showLastUpdateTime: true,
          remarkPlugins: [a11yEmoji, oembed, mdxMermaid],
          onlyIncludeVersions: (() =>
            isProd ? undefined : ['current', ...versions.slice(0, 2)])(),
          versions: {
            current: {
              label: 'edge 🚧',
              path: '/edge',
              banner: 'unreleased',
              badge: false,
            },
            '2.X': {
              label: latestRelease.startsWith('2.') ? latestRelease : '2.X',
            },
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
          customCss: require.resolve('./src/css/custom.css'),
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
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
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
      // announcementBar: {
      //   id: 'announcementBar-3', // Increment on change
      //   content:
      //     '<span aria-label="star" role="img" class="lg-screens-only">⭐</span> If you like Resoto, please <a href="https://github.com/someengineering/resoto" target="_blank" rel="noopener noreferrer">star the project on GitHub</a> and <a href="https://linkedin.com/company/someengineering" target="_blank" rel="noopener noreferrer">follow Some Engineering Inc. on LinkedIn</a>. Thanks for your support! <span aria-label="heart" role="img" class="lg-screens-only">❤️</span>',
      // },
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
        copyright: `<span aria-label="owl" role="img" class="lg-screens-only">🦉</span> Copyright © ${new Date().getFullYear()} <a href="https://some.engineering" target="_blank" rel="noopener noreferrer">Some Engineering Inc</a>. Built with <a href="https://docusaurus.io" target="_blank" rel="noopener noreferrer">Docusaurus</a>. <span aria-label="dinosaur" role="img" class="lg-screens-only">🦖</span>`,
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
        additionalLanguages: ['csv', 'ini', 'powershell'],
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
