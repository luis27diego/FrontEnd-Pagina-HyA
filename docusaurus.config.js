// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Histología y Anatomía',
  tagline: 'Material de estudio colaborativo',
  favicon: 'img/favicon.ico',

  url: 'https://luis27diego.github.io',
  baseUrl: '/FrontEnd-Pagina-HyA/',

  // GitHub pages deployment config.
  organizationName: 'luis27diego',
  projectName: 'FrontEnd-Pagina-HyA',
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: false, // Desactivamos completamente el blog
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/logo_hya.jpg',
      navbar: {
        title: '',
        logo: {
          alt: 'H y A Logo',
          src: 'img/logo.svg',
          srcDark: 'img/logo_dark.svg',
        },
        items: [
          {
            label: 'Histología',
            type: 'docSidebar',
            sidebarId: 'histologiaSidebar',
            position: 'left',
          },
          {
            label: 'Anatomía',
            type: 'docSidebar',
            sidebarId: 'anatomiaSidebar',
            position: 'left',
          },
          {
            href: 'http://ingenieria.uner.edu.ar',
            className: "header-uner-link",
            position: 'right',
          },
          {
            href: 'https://campus.ingenieria.uner.edu.ar/course/view.php?id=155',
            className: "header-moodle-link",
            position: 'right',
          },
          {
            href: 'https://github.com/luis27diego/FrontEnd-Pagina-HyA',
            className: "header-github-link",
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Cátedra de Histología y Anatomía de la FIUNER`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;