// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Jacob's Site",
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://jacobcohen.work',
  baseUrl: '/',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'TheNullMoot', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
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
        title: "Home",
        logo: {
          alt: 'My Icon',
          src: 'img/iconBig.jpg',
        },
        items: [
          { to: '/aboutMe', label: 'About Me', position: 'left' },
          { to: '/projects', label: 'Projects', position: 'left' },
          {
            href: 'https://github.com/TheNullMoot',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://www.linkedin.com/in/jcohen120/',
            label: 'LinkedIn',
            position: 'right',
          },
        ],
      },
      footer: {
        copyright: `Copyright © ${new Date().getFullYear()} Built by Jacob Cohen.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        disableSwitch: true,
        respectPrefersColorScheme: false,
        defaultMode: 'dark'
      },
    }),
};

module.exports = config;
