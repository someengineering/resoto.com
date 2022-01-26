// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const a11yEmoji = require('@fec/remark-a11y-emoji');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Resoto by Some Engineering',
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
  trailingSlash: true,

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/someengineering/resoto.com/edit/main',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          remarkPlugins: [a11yEmoji],
        },
        blog: {
          blogTitle: 'Blog',
          blogDescription: 'Resoto blog',
          blogSidebarTitle: 'Posts',
          path: 'blog',
          routeBasePath: 'blog',
          showReadingTime: true,
          remarkPlugins: [a11yEmoji],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
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
        path: 'news',
        routeBasePath: 'news',
        showReadingTime: true,
        remarkPlugins: [a11yEmoji],
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {
          name: 'keywords',
          content:
            'resoto, some engineering, sre, cloud, cloud services, cloud providers, aws, amazon web services, gcp, google cloud platform, azure, docker, kubernetes, k8s, devops, prometheus, infrastructure, resource tool, multicloud, metrics, python, terraform, vsphere, finops, risotto',
        },
      ],
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
      announcementBar: {
        id: 'announcementBar-1', // Increment on change
        content: `<span aria-label="star" role="img">⭐</span> If you like Resoto, please <a href="https://github.com/someengineering/resoto" target="_blank" rel="noopener noreferrer">star the project on GitHub</a> and <a href="https://www.linkedin.com/company/someengineering" target="_blank" rel="noopener noreferrer">follow Some Engineering Inc. on LinkedIn</a>. Thanks for your support! <span aria-label="heart" role="img">❤️</span>`,
      },
      navbar: {
        title: 'Resoto',
        logo: {
          alt: 'Resoto Logo',
          src: 'img/navbar-logo.svg',
        },
        items: [
          { to: '/about', label: 'About', position: 'left' },
          {
            to: '/docs',
            label: 'Documentation',
            position: 'left',
            type: 'dropdown',
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
                href: 'https://www.linkedin.com/company/someengineering/',
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
          alt: 'Some Engineering Logo',
          src: 'img/someengineering.svg',
          href: 'https://some.engineering',
          width: 167,
          height: 121,
        },
        copyright: `<span aria-label="owl" role="img">🦉</span> Copyright © ${new Date().getFullYear()} <a href="https://some.engineering" target="_blank" rel="noopener noreferrer">Some Engineering Inc</a>. Built with <a href="https://docusaurus.io" target="_blank" rel="noopener noreferrer">Docusaurus</a>. <span aria-label="dinosaur" role="img">🦖</span>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['powershell'],
      },
    }),
};

module.exports = config;
