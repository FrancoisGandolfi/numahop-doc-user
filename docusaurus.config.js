// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUsers, faBook, faGlobe, faSearch, faInfoCircle } from '@fortawesome/free-solid-svg-icons';



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
      image: 'img/logo.png',

      // Barre de navigation
      navbar: {
        title: 'NumaDoc',
        logo: {
          alt: 'Logo NumaHop',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: '/presentation',
            label: 'Présentation',
            position: 'left',
          },
          {
            to: '/communaute',
            sidebarId: 'comuSidebar',
            label: 'Communauté',
          },
          {
            to: 'blog',
            sidebarId: 'workSidebar',
            label: 'NumaWork',
          },
          {
            position: 'left',
            label: 'Manuels d\'utilisation',
            items: [
              {
                to: '/docs/intro',
                sidebarId: 'comuSidebar',
                label: 'Introduction',
              },
              {
                type: 'docSidebar',
                sidebarId: 'adminSidebar',
                label: 'Administrateur',
              },
              {
                type: 'docSidebar',
                sidebarId: 'userSidebar',
                label: 'Utilisateur',
              },
              {
                type: 'docSidebar',
                sidebarId: 'prestaSidebar',
                label: 'Prestataire',
              },
              {
              type: 'docSidebar',
              sidebarId: 'glossaireSidebar',
              label: 'Glossaire',
              }
        ]
      },
          {
  type: 'localeDropdown',
    position: 'right',
          },

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


