import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faBook, faLock, faDownload, faUsers } from '@fortawesome/free-solid-svg-icons';

// Données pour les cartes de fonctionnalités
const features = [
  {
    title: 'Documentation complète',
    icon: faBook,
    description: 'Guides détaillés pour administrateurs, utilisateurs et prestataires.',
    link: '/docs/intro',
    isExternal: false,
  },
  {
    title: 'Logiciel libre',
    icon: faDownload,
    description: 'Code disponible sur GitHub.',
    link: 'https://github.com/NumaHOP/',
    isExternal: true,
  },
  {
    title: 'Démonstration en ligne',
    icon: faLock,
    description: 'Environnement sécurisé pour tester NumaHOP.',
    link: 'https://standard-231-numahop.support.biblibre.eu/#/login?redirect=%2Fdashboard',
    isExternal: true,
  },
  {
    title: 'Communauté active',
    icon: faUsers,
    description: 'Support collaboratif via notre liste de diffusion.',
    link: '/communaute',
    isExternal: false,
  },
];

// Composant pour une carte de fonctionnalité
const FeatureCard = ({ icon, title, description, link, isExternal }) => (
  <div className={styles.featureCard}>
    <div className={styles.featureIcon}>
      <FontAwesomeIcon icon={icon} />
    </div>
    <h3 className={styles.featureTitle}>{title}</h3>
    <p className={styles.featureDescription}>{description}</p>
    <Link
      className={clsx('button button--primary',styles.actionButton)}
      to={link}
      {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
    >
      En savoir plus
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
            alt="Logo NumaHOP"
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
          <h2 className={styles.featuresSubtitle}>
            NumaHOP, une plateforme open source de gestions de collections numérisées animée par une communauté active.
          </h2>
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
