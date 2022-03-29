/* eslint-disable @typescript-eslint/no-var-requires */
// @ts-check

const a11yEmoji = require('@fec/remark-a11y-emoji');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Resoto by Some Engineering Inc.',
  tagline:
    'Find leaky resources, manage quota limits, detect drift, and clean up!',
  url: 'https://resoto.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'someengineering',
  projectName: 'resoto.com',
  deploymentBranch: 'gh-pages',
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
  presets: [
    [
      'redocusaurus',
      {
        specs: [
          {
            id: 'resotocore',
            spec: 'openapi/resotocore.yml',
          },
        ],
        theme: {
          primaryColor: '#762dd7',
        },
      },
    ],
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/someengineering/resoto.com/edit/main',
          showLastUpdateAuthor: false,
          showLastUpdateTime: true,
          remarkPlugins: [a11yEmoji, require('mdx-mermaid')],
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
      autoCollapseSidebarCategories: true,
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
        id: 'announcementBar-2', // Increment on change
        content:
          '<span aria-label="sparkle" role="img" class="lg-screens-only">✨</span> <a href="https://resoto.com/news/2022/03/24/community-hour-event">Join the Some Engineering team on Discord for our first-ever Community Hour on Thursday, March 31!</a> <span aria-label="sparkle" role="img" class="lg-screens-only">✨</span>',
      },
      navbar: {
        hideOnScroll: true,
        title: 'Resoto',
        logo: {
          alt: 'Resoto Logo',
          src: 'img/navbar-logo.svg',
        },
        items: [
          { to: '/', label: 'Home', position: 'left', exact: true },
          { to: '/about', label: 'About', position: 'left' },
          {
            to: '/docs',
            label: 'Documentation',
            position: 'left',
            // type: 'dropdown',
            // items: [
            //   {
            //     label: 'Getting Started',
            //     to: '/docs/getting-started',
            //   },
            //   {
            //     label: 'Concepts',
            //     to: '/docs/concepts',
            //   },
            //   {
            //     label: 'Reference',
            //     to: '/docs/reference',
            //   },
            //   {
            //     label: 'Contributing',
            //     to: '/docs/contributing',
            //   },
            // ],
          },
          { to: '/news', label: 'News', position: 'left' },
          { to: '/blog', label: 'Blog', position: 'left' },
          { to: '/support', label: 'Support', position: 'left' },
          {
            label: 'GitHub',
            href: 'https://github.com/someengineering/resoto',
            position: 'right',
            className: 'header-icon-link header-github-link',
            'aria-label': 'GitHub',
          },
          {
            label: 'LinkedIn',
            href: 'https://www.linkedin.com/company/someengineering',
            position: 'right',
            className: 'header-icon-link header-linkedin-link',
            'aria-label': 'LinkedIn',
          },
          // {
          //   label: 'Twitter',
          //   href: 'https://twitter.com/someengineering',
          //   position: 'right',
          //   className: 'header-icon-link header-twitter-link',
          //   'aria-label': 'Twitter',
          // },
          {
            label: 'Discord',
            href: 'https://discord.gg/someengineering',
            position: 'right',
            className: 'header-icon-link header-discord-link',
            'aria-label': 'Discord',
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
                label: 'Discord',
                href: 'https://discord.gg/someengineering',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/someengineering',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'News',
                to: '/news',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/someengineering',
              },
              // {
              //   label: 'Twitter',
              //   href: 'https://twitter.com/someengineering',
              // },
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
        logo: {
          alt: 'Deploys by Netlify',
          src: 'https://netlify.com/img/global/badges/netlify-color-accent.svg',
          width: 114,
          height: 51,
          href: 'https://netlify.com',
        },
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
        additionalLanguages: ['ini', 'powershell'],
      },
    }),
};

module.exports = config;
