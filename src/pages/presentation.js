import React from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './presentation.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faCog, faUsers, faFileExport, faScrewdriverWrench, faCheckDouble, faLock, faVideo } from '@fortawesome/free-solid-svg-icons';
import Link from '@docusaurus/Link';

const features = [
  {
    title: 'Gestion centralisée',
    icon: faBook,
    description: 'Centralisez et organisez vos notices documentaires et vos reproductions numériques en un seul endroit, accessible en ligne.',
    tags: [
      { label: 'Projets', link: '/docs/introduction/interfacee' },
      { label: 'Lots', link: '/docs/introduction/interfacee' },
      { label: 'Trains', link: '/docs/introduction/interfacee' },
    ]
  },
  {
    title: 'Espace collaboratif',
    icon: faUsers,
    description: 'Travaillez en équipe au sein de votre établissement et avec vos partenaires, en configurant des rôles et permissions spécifiques à chaque utilisateurs.',
    tags: [
      { label: 'Groupes', link: '/docs/introduction/interfacee' },
      { label: 'Utilisateurs', link: '/docs/introduction/interfacee' },
      { label: "Livraisons", link: '/docs/introduction/interfacee'}
    ]
  },
  {
    title: 'Configuration flexible',
    icon: faCog,
    description: 'Adaptez les worflows, les constats d\'état et les contrôles aux besoins spécifiques à votre établissement et à chacun de vos projets de numérisation.',
    tags: [
      { label: 'Worflows', link: '/docs/introduction/interfacee' },
      { label: 'Contrôles', link: '/docs/introduction/interfacee' },
      { label: 'Constat d\'états', link: '/docs/introduction/interfacee' }
    ]
  },
  {
    title: 'Dérivation simplifiée',
    icon: faScrewdriverWrench,
    description: 'Importez et dérivez les données natives de vos systèmes d\'information documentaire vers le standard interopérable Dublin Core.',
    tags: [
      { label: 'Mappings', link: "/docs/introduction/interfacee" },
      { label: 'Import de notices', link: '/docs/introduction/interfacee' }
    ]
  },
  {
    title: 'Contrôle qualité',
    icon: faCheckDouble,
    description: 'Facilitez le travail de contrôle en parametrant les contrôles automatiques et manuels selon vos entreprises de numérisation.',
    tags: [
      { label: 'Contrôles automatiques', link: '/docs/introduction/interfacee' },
      { label: 'Contrôles manuels', link: '/docs/introduction/interfacee' }
    ]
  },
  {
    title: 'Export automatisé',
    icon: faFileExport,
    description: 'Disséminez vos unités documentaires et leurs dérivées sur différentes plateformes de diffusion et d\'archivage.',
    tags: [
      { label: 'Archivage', link: '/docs/introduction/interfacee' },
      { label: 'Export', link: '/docs/introduction/interfacee' },
      { label: 'Fichiers dérivés', link: '/docs/introduction/interfacee' }
    ],
  },
];

// Composant pour afficher une feature
const FeatureCard = ({ icon, title, description, tags }) => (
  <div className={styles.featureCard}>
    <div className={styles.featureIcon}>
      <FontAwesomeIcon icon={icon} size="3x" />
    </div>
    <h3 className={styles.featureTitle}>{title}</h3>
    <p className={styles.featureDescription}>{description}</p>
    {/* Section des tags */}
    {tags && tags.length > 0 && (
      <div className={styles.tagsContainer}>
        {tags.map((tag, index) => (
          <Link
            key={index}
            className={clsx('badge badge--secondary', styles.tag)}
            to={tag.link}
          >
            {tag.label}
          </Link>
        ))}
      </div>
    )}
  </div>
);

const PresentationPage = () => {
  return (
    <Layout title="Présentation de NumaHOP" description="Découvrez NumaHOP, la plateforme de gestion de contenus numérisés">
      <div className={styles.container}>
        {/* En-tête */}
        <header className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>NumaHOP</h1>
            <p className={styles.heroSubtitle}>
              La plateforme de gestion de contenus numérisés pour les bibliothèques, centres d'archives, et les institutions culturelles.
            </p>
            <p>NumaHOP est une solution complète pour la gestion de contenus numérisés, spécialement conçue pour les bibliothèques, les archives et les institutions culturelles.

            </p><p>Avec NumaHOP, vous pouvez facilement numériser, organiser, rechercher et partager vos collections de documents, tout en bénéficiant d'une interface intuitive et de fonctionnalités avancées.

            </p><p>Que vous soyez une petite bibliothèque ou une grande institution, NumaHOP s'adapte à vos besoins et vous accompagne dans votre transition numérique.</p>
            
          </div>
          <div className={styles.heroImage}>
            <img src="/img/poster.jpg" alt="Poster NumaHOP" />
          </div>
        </header>

        {/* Section des fonctionnalités */}
        <section className={styles.features}>
          <h2 className={styles.sectionTitle}>
            <FontAwesomeIcon icon={faCog} className={styles.sectionIcon} />
            Fonctionnalités clés
          </h2>
          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                tags={feature.tags}
              />
            ))}
          </div>
        </section>


        {/* Section des vidéos de démonstration */}
        <section className={styles.videosSection}>
          <h2 className={styles.sectionTitle}>
            <FontAwesomeIcon icon={faVideo} className={styles.sectionIcon} />
            NumaHOP en vidéo</h2>
          <div className={styles.videosGrid}>
            {/* Vidéo 1: Lundis Numériques INHA */}
            <div className={styles.videoCard}>
              <div className={styles.videoContainer}>
                <iframe
                  src="https://www.youtube.com/embed/Dvdf_P-1sjQ?si=XpHqJYAuo6q9CIax"
                  title="Lundis numériques de l'INHA 2022"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className={styles.videoTitle}>Les Lundis Numériques<br />Institut national d'histoire de l'art</div>
            </div>

            <div className={styles.videoCard}>
              <div className={styles.videoContainer}>
                <iframe
                  src="https://www.youtube.com/embed/JRLUKbGO7RE"
                  title="Journées professionnelles 2022"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className={styles.videoTitle}>
                Journées professionnelles 2022<br />Université Paris-Saclay
              </div>
            </div>


            {/* Vidéo 3: Recherche avancée */}
            <div className={styles.videoCard}>
              <div className={styles.videoContainer}>
                <iframe
                  src="https://www.youtube.com/embed/9iVJMFaQ7MA?si=iw58bwqNGtAYNpqy"
                  title="Journées professionnelles 2019"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className={styles.videoTitle}>Journées professionnelles 2019<br />Bibliothèque universitaire des langues et civilisations</div>
            </div>

          </div>
        </section>


      </div>
    </Layout>
  );
};

export default PresentationPage;
