// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Resoto by Some Engineering',
  tagline:
    'Resoto is an open source tool that finds leaky resources, manages quota limits, detects drift, and cleans up!',
  url: 'https://resoto.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/placeholder-logo.png',
  organizationName: 'someengineering',
  projectName: 'resoto',
  deploymentBranch: 'gh-pages',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/someengineering/resoto.com/edit/main',
        },
        blog: {
          blogTitle: 'News',
          blogDescription: 'Resoto release notes and news',
          showReadingTime: true,
          path: 'news',
          routeBasePath: 'news',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Resoto',
        logo: {
          alt: 'Resoto Logo',
          src: 'img/placeholder-logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'index',
            position: 'left',
            label: 'Documentation',
            showLastUpdateAuthor: true,
            showLastUpdateTime: true,
          },
          { to: '/news', label: 'News', position: 'left' },
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
          // {
          //   title: 'Documentation',
          //   items: [
          //     {
          //       label: 'Tutorials',
          //       to: '/docs/tutorial',
          //     },
          //     {
          //       label: 'Concepts',
          //       to: '/docs/concept',
          //     },
          //     {
          //       label: 'Reference',
          //       to: '/docs/reference',
          //     },
          //   ],
          // },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/someengineering',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/someengineering/',
              },
              // {
              //   label: 'Help',
              //   href: '/community/support',
              // },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'News',
                href: '/news',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/someengineering',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/someengineering',
              },
            ],
          },
          {
            title: 'Legal',
            items: [
              {
                label: 'Terms',
                href: 'https://some.engineering/terms.html',
              },
              {
                label: 'Privacy',
                href: 'https://some.engineering/privacy.html',
              },
            ],
          },
        ],
        logo: {
          alt: 'Some Engineering Logo',
          src: 'img/someengineering.png',
          href: 'https://some.engineering',
          width: 167,
          height: 121,
        },
        copyright: `Copyright © ${new Date().getFullYear()} <a href="https://some.engineering" target="_blank" rel="noopener noreferrer">Some Engineering Inc</a>. Built with <a href="https://docusaurus.io" target="_blank" rel="noopener noreferrer">Docusaurus</a>.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
