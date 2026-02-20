import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faBook, faLock, faUsers, faCode } from '@fortawesome/free-solid-svg-icons';

// Données pour les cartes de fonctionnalités
const features = [
  {
    title: 'Documentation',
    icon: faBook,
    description: 'Une documentation complète et détaillée, destinée aux administrateurs et utilisateurs autant qu\'aux prestataires de numérisation.',
    link: '/docs/introduction',
    linkTitle: 'La Documentation',
  },
  {
    title: 'Logiciel libre',
    icon: faCode,
    description: 'NumaHop est un logiciel libre développé pour trois institutions publiques, dont le code source est aujourd\'hui disponible sur GitHub (licence MIT).',
    link: 'https://github.com/NumaHOP/',
    linkTitle: 'Le Code source',
  },
  {
    title: 'Communauté',
    icon: faUsers,
    description: 'Soutien actif du logiciel, l\'association assure le partage et l\'échange, en menant des actions de formation, de traduction, de documentation, et de développement ',
    link: '/communaute',
    linkTitle: 'L\'Association',
  },
  {
    title: 'Bac à sable',
    icon: faLock,
    description: 'Une instance de test, offrant les dernières évolution du logiciel est mise à disposition de la communauté pour découvrir toutes les étapes du workflow.',
    link: 'https://standard-231-numahop.support.biblibre.eu/#/login?redirect=%2Fdashboard',
    linkTitle: 'Le Bac à sable',
  },
];

// Composant pour une carte de fonctionnalité
const FeatureCard = ({ icon, title, description, link, linkTitle, isExternal }) => (
  <div className={styles.featureCard}>
    <div className={styles.featureIcon}>
      <FontAwesomeIcon icon={icon} />
    </div>
    <h3 className={styles.featureTitle}>{title}</h3>
    <p className={styles.featureDescription}>{description}</p>
    <Link
      className={clsx('button button--primary', styles.actionButton)}
      to={link}
      {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
    >
      {linkTitle}
      {isExternal && <FontAwesomeIcon icon={faExternalLinkAlt} className={styles.buttonIcon} />}
    </Link>
  </div>
);

// Bandeau de présentation (Hero)
function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <img
            src="/img/numahop-logo.png"
            alt="Logo NumaHop"
            className={styles.logo}
          />
          <p className={styles.tagline}>
            {siteConfig.tagline}
          </p>
        </div>
      </div>
    </header>
  );
}

// Page d'accueil
export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Accueil | ${siteConfig.title}`}
      description="Plateforme de gestion de contenus numérisés pour les bibliothèques et institutions culturelles."
    >
      {/* Bandeau garanti */}
      <HomepageHeader />

      {/* Contenu principal */}
      <main className={styles.container}>
        <section className={styles.features}>
          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}