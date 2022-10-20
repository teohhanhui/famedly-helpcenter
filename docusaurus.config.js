// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Famedly Help Center',
  tagline: 'We are here to make youe work easier',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/company/helpcenter/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
         // editUrl:
          // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
        title: 'Famedly Help Center',
        logo: {
          alt: 'Famedly Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'first-steps',
            position: 'left',
            label: 'First Steps',
          },
          {
            type: 'doc',
            docId: 'using-famedly',
            position: 'left',
            label: 'Using Famedly',
          },
          {
            type: 'doc',
            docId: 'your-profile',
            position: 'left',
            label: 'Your Profile',
          },
          {
            type: 'doc',
            docId: 'mistakes',
            position: 'left',
            label: 'Common Mistakes',
          },
          {
            type: 'doc',
            docId: 'administration',
            position: 'left',
            label: 'Administration',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          }

        
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Gitlab',
                href: 'https://gitlab.com/famedly',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Famedly Helpcenter, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

    i18n: {
      defaultLocale: 'en',
      locales: ['en', 'de'],
      localeConfigs: {
        en: {
          label: 'English',
        },
        de: {
          label: 'Deutsch',
        },
      },
    },
};

module.exports = config;
