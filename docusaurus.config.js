// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const DefaultLocale = 'en';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Famedly Help Center',
  tagline: 'We are here to make your work easier',
  url: 'https://famedly.github.io',
  baseUrl: '/helpcenter/',
  projectName: 'helpcenter',
  organizationName: 'famedly',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          editUrl: "https://github.com/famedly/helpcenter/edit/main/docs/",
          async sidebarItemsGenerator({ defaultSidebarItemsGenerator, ...args }) {
            // Filters index files out of the sidebar
            let items = await defaultSidebarItemsGenerator(args);
            items = items.filter((e) => !(e.type === 'doc' && e.id.endsWith('index')));
            return items;
          },
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
      docs: {
        sidebar: {
          hideable: false,
          autoCollapseCategories: false,
        },
      },
      navbar: {
        hideOnScroll: false,
        title: 'Famedly',
        logo: {
          alt: 'Famedly Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'help-center/first-steps/index',
            position: 'left',
            label: 'Help Center',
          },
          {
            type: 'doc',
            docId: 'api/index',
            position: 'left',
            label: 'API',
          },
          {
            to: 'https://famedly.com/',
            label: 'Website',
            position: 'right',
          },
          {
            to: 'https://github.com/famedly',
            label: 'Github',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        copyright: `Copyright © ${new Date().getFullYear()} Famedly GmbH`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        appId: 'FFJ2EFU29K',
        apiKey: '9190656e6d77ef676a3f4e582fe172db',
        indexName: 'famedly-gitlab',
        container: 'div#',
        contextualSearch: true,
        replaceSearchResultPathname: {
          from: '/docs/', // or as RegExp: /\/docs\//
          to: '/',
        },
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
