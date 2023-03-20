// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const defaultLocale = 'en';

function getLocalizedConfigValue(/** @type {string} */ key) {
  const currentLocale = process.env.DOCUSAURUS_CURRENT_LOCALE ?? defaultLocale;
  const values = ConfigLocalized[key];
  if (!values) {
    throw new Error(`Localized config key=${key} not found`);
  }
  const value = values[currentLocale] ?? values[defaultLocale];
  if (!value) {
    throw new Error(
      `Localized value for config key=${key} not found for both currentLocale=${currentLocale} or defaultLocale=${defaultLocale}`,
    );
  }
  return value;
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Famedly Help Center',
  tagline: 'We are here to make your work easier',
  url: 'https://docs.famedly.com',
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
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: ({locale, versionDocsDirPath, docPath}) => {
            // Link to Crowdin for German docs
            if (locale !== DefaultLocale) {
              return 'https://crowdin.com/project/famedly-helpcenter/${locale}';
            }
            // Link to GitHub for English docs
            return 'https://gitlab.com/famedly/company/helpcenter/-/tree/main';
          },
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
            to: 'https://gitlab.com/famedly',
            label: 'Gitlab',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
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
        copyright: `Copyright © ${new Date().getFullYear()} Famedly GmbH`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        appId: 'PASQKGULKP',
        apiKey: '2a242c6732a15fa20f66651cfb9d0435',
        indexName: 'famedly',
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
