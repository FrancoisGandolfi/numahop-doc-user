// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  // Champs obligatoires
  title: 'NumaHop',
  tagline: 'Documentation professionnelle',
  favicon: 'img/numahop-logo.png',

  // Configuration pour GitLab Pages
  url: 'https://fgandolfi.gitlab.io', // URL de ton utilisateur GitLab
  baseUrl: '/', // Nom de ton dépôt

  // Organisation et nom du projet (optionnel pour GitLab Pages)
  organizationName: 'asso-numahop',
  projectName: 'numahop-doc-user',

  // Gestion des liens brisés
  onBrokenLinks: 'throw',

  // Internationalisation (i18n)
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    localeConfigs: {
      fr: { label: 'Français', direction: 'ltr' },
      en: { label: 'English', direction: 'ltr' },
    },
  },

  // Presets classiques (docs, blog, theme)
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://gitlab.com/fgandolfi/numahop-doc-user/-/edit/main/', // Lien vers ton dépôt GitLab
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://gitlab.com/fgandolfi/numahop-doc-user/-/edit/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  // Configuration du thème
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Image pour les réseaux sociaux
      image: 'img/numahop-logo.png',

      // Barre de navigation
      navbar: {
        title: 'NumaDoc',
        logo: {
          alt: 'Logo NumaHop',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'adminSidebar',
            position: 'left',
            label: 'Administrateur',
          },
          {
            type: 'docSidebar',
            sidebarId: 'userSidebar',
            position: 'left',
            label: 'Utilisateur',
          },
          {
            type: 'docSidebar',
            sidebarId: 'prestaSidebar',
            position: 'left',
            label: 'Prestataire',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          // Barre de recherche locale (ajoutée ici)
          {
            type: 'search',
            position: 'right',
          },
        ],
      },

      // Pied de page
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Association NumaHop`,
      },
    }),

  // Plugins (recherche locale)
  plugins: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: ['fr', 'en'],
      },
    ],
  ],
};

module.exports = config;


