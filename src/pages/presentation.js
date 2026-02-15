import React from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './presentation.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faCog, faUsers, faSearch, faDatabase, faMobileAlt, faLock } from '@fortawesome/free-solid-svg-icons';

const features = [
  {
    title: 'Gestion des contenus numérisés',
    icon: faBook,
    description: 'Centralisez et organisez tous vos documents numérisés en un seul endroit.',
  },
  {
    title: 'Configuration flexible',
    icon: faCog,
    description: 'Adaptez la plateforme à vos besoins spécifiques avec des paramètres avancés.',
  },
  {
    title: 'Collaboration multi-utilisateurs',
    icon: faUsers,
    description: 'Travaillez en équipe avec des rôles et permissions personnalisables.',
  },
  {
    title: 'Recherche avancée',
    icon: faSearch,
    description: 'Trouvez rapidement vos documents grâce à un moteur de recherche puissant.',
  },
  {
    title: 'Stockage sécurisé',
    icon: faDatabase,
    description: 'Bénéficiez d’un stockage sécurisé et fiable pour vos archives numériques.',
  },
  {
    title: 'Accès mobile',
    icon: faMobileAlt,
    description: 'Accédez à vos documents depuis n’importe quel appareil, où que vous soyez.',
  },
];

const PresentationPage = () => {
  return (
    <Layout title="Présentation de NumaHOP" description="Découvrez NumaHOP, la plateforme de gestion de contenus numérisés">
      <div className={styles.container}>
        {/* En-tête */}
        <header className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>NumaHOP</h1>
            <p className={styles.heroSubtitle}>
              La plateforme de gestion de contenus numérisés pour les bibliothèques et les institutions culturelles.
            </p>
            <div className={styles.heroButtons}>
              <a
                className={clsx('button button--primary button--lg', styles.heroButton)}
                href="https://standard-231-numahop.support.biblibre.eu/#/login?redirect=%2Fdashboard"
                target="_blank"
                rel="noopener noreferrer"
              >
                Essayer NumaHOP <FontAwesomeIcon icon={faLock} className={styles.buttonIcon} />
              </a>
              <a
                className={clsx('button button--secondary button--lg', styles.heroButton)}
                href="/docs/intro"
              >
                Documentation <FontAwesomeIcon icon={faBook} className={styles.buttonIcon} />
              </a>
            </div>
          </div>
          <div className={styles.heroImage}>
            <img src="/img/poster.png" alt="Poster NumaHOP" />
          </div>
        </header>

        {/* Section des fonctionnalités */}
        <section className={styles.features}>
          <h2 className={styles.sectionTitle}>Fonctionnalités clés</h2>
          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div key={index} className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <FontAwesomeIcon icon={feature.icon} size="2x" />
                </div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section de présentation */}
        <section className={styles.presentation}>
          <h2 className={styles.sectionTitle}>Pourquoi choisir NumaHOP ?</h2>
          <div className={styles.presentationContent}>
            <div className={styles.presentationText}>
              <p>
                NumaHOP est une solution complète pour la gestion de contenus numérisés, spécialement conçue pour les bibliothèques, les archives et les institutions culturelles.
              </p>
              <p>
                Avec NumaHOP, vous pouvez facilement numériser, organiser, rechercher et partager vos collections de documents, tout en bénéficiant d'une interface intuitive et de fonctionnalités avancées.
              </p>
              <p>
                Que vous soyez une petite bibliothèque ou une grande institution, NumaHOP s'adapte à vos besoins et vous accompagne dans votre transition numérique.
              </p>
            </div>
            <div className={styles.presentationImage}>
              <img src="/img/numahop-interface.png" alt="Interface de NumaHOP" />
            </div>
          </div>
        </section>

        {/* Section des captures d'écran */}
        <section className={styles.screenshots}>
          <h2 className={styles.sectionTitle}>Découvrez l'interface</h2>
          <div className={styles.screenshotsGrid}>
            <div className={styles.screenshotCard}>
              <img src="/img/screenshot1.png" alt="Gestion des documents" />
              <h3>Gestion des documents</h3>
            </div>
            <div className={styles.screenshotCard}>
              <img src="/img/screenshot2.png" alt="Recherche avancée" />
              <h3>Recherche avancée</h3>
            </div>
            <div className={styles.screenshotCard}>
              <img src="/img/screenshot3.png" alt="Tableau de bord" />
              <h3>Tableau de bord</h3>
            </div>
          </div>
        </section>

        {/* Section d'appel à l'action */}
        <section className={styles.cta}>
          <h2 className={styles.ctaTitle}>Prêt à numériser vos contenus ?</h2>
          <p className={styles.ctaSubtitle}>
            Rejoignez les nombreuses institutions qui utilisent déjà NumaHOP pour gérer leurs collections numériques.
          </p>
          <div className={styles.ctaButtons}>
            <a
              className={clsx('button button--primary button--lg', styles.ctaButton)}
              href="https://standard-231-numahop.support.biblibre.eu/#/login?redirect=%2Fdashboard"
              target="_blank"
              rel="noopener noreferrer"
            >
              Accéder à NumaHOP
            </a>
            <a
              className={clsx('button button--secondary button--lg', styles.ctaButton)}
              href="/docs/intro"
            >
              Lire la documentation
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default PresentationPage;
