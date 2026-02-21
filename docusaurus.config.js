// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUsers, faBook, faGlobe, faSearch, faInfoCircle, faNewspaper } from '@fortawesome/free-solid-svg-icons';

/** @type {import('@docusaurus/types').Config} */
const config = {
  // Champs obligatoires
  title: 'NumaHop',
  tagline: 'Logiciel open source de gestion de collections numérisées portée par une communauté active.',
  favicon: 'img/favicon.ico',

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
          showLastUpdateTime: true,
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

      lastUpdate: {
        text: 'Dernière mise à jour le {date} par {author}',
      },

      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },

      // Barre de navigation
      navbar: {
        title: 'NumaHop',
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
            label: '@NumaWork',
            position: 'left'
          },
          {
            position: 'left',
            label: 'Documentation',
            items: [
              {
                type: 'docSidebar',
                sidebarId: 'introSidebar',
                label: 'Présentation du logiciel',
              },
              {
                type: 'docSidebar',
                sidebarId: 'adminSidebar',
                label: 'Accès administrateur',
              },
              {
                type: 'docSidebar',
                sidebarId: 'userSidebar',
                label: 'Accès utilisateur',
              },
              {
                type: 'docSidebar',
                sidebarId: 'prestaSidebar',
                label: 'Accès prestataire',
              },
              {
                type: 'docSidebar',
                sidebarId: 'glossaireSidebar',
                label: 'Glossaire',
              },
              {
                type: 'docSidebar',
                sidebarId: 'pratiquesSidebar',
                label: 'Cas pratiques',
              }
            ]
          },
          {
            type: 'search',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/NumaHOP/',
            className: 'navbar-github-link',
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
