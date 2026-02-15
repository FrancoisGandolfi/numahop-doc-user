import React from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './communaute.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faUniversity, faBuilding, faQuoteLeft, faHandshake, faEnvelope } from '@fortawesome/free-solid-svg-icons';

// Liste des établissements membres
const membres = [
  {
    nom: 'Bibliothèque Sainte Geneviève',
    type: 'Bibliothèque',
    description: 'Une des plus grandes bibliothèques municipales de France, engagée dans la numérisation de ses collections.',
    logo: '/img/logos/bsg-logo.png',
  },
  {
    nom: 'Science Po Paris',
    type: 'Bibliothèque',
    description: 'Conservent les archives publiques françaises et participent activement à leur numérisation.',
    logo: '/img/logos/sciencepo-logo.png',
  },
  {
    nom: 'Université Paris Saclay',
    type: 'Université',
    description: 'Partenaire historique de NumaHOP, la BnF utilise la plateforme pour ses collections numériques.',
    logo: '/img/logos/saclay-logo.png',
  },
  {
    nom: 'Bibliothèque de l\'ENS',
    type: 'Bibliotheque',
    description: 'Utilise NumaHOP pour la gestion de ses archives et documents pédagogiques numérisés.',
    logo: '/img/logos/ens-logo.png',
  },
  {
    nom: 'Bulac',
    type: 'Bibliothèque',
    description: 'Membre actif de la communauté, participant aux développements de nouvelles fonctionnalités.',
    logo: '/img/logos/bulac-logo.png',
  },
  {
    nom: 'Humathèque Condorcet',
    type: 'Bibliothèque',
    description: 'Utilise NumaHOP pour la conservation et la diffusion de ses archives numérisées.',
    logo: '/img/logos/humatheque-logo.png',
  },
];

// Témoignages des membres
const temoignages = [
  {
    auteur: 'Marie Dupont',
    etablissement: 'Bibliothèque Municipale de Lyon',
    citation: 'NumaHOP nous a permis de centraliser et de rendre accessible l\'ensemble de nos collections numérisées. L\'interface est intuitive et les fonctionnalités de recherche sont très puissantes.',
    photo: '/img/testimonials/marie-dupont.jpg',
  },
  {
    auteur: 'Jean Martin',
    etablissement: 'Archives Nationales',
    citation: 'Grâce à NumaHOP, nous avons pu accélérer notre processus de numérisation et offrir un accès en ligne à nos archives. La collaboration avec l\'équipe est excellente.',
    photo: '/img/testimonials/jean-martin.jpg',
  },
  {
    auteur: 'Sophie Leroy',
    etablissement: 'Université Paris 1 Panthéon-Sorbonne',
    citation: 'La plateforme est idéale pour gérer nos documents pédagogiques. Les étudiants et les enseignants apprécient particulièrement la facilité d\'accès aux ressources.',
    photo: '/img/testimonials/sophie-leroy.jpg',
  },
];

const CommunautePage = () => {
  return (
    <Layout title="Communauté NumaHOP" description="Découvrez l'association NumaHOP et ses établissements membres">
      <div className={styles.container}>
        {/* En-tête */}
        <header className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              <FontAwesomeIcon icon={faUsers} className={styles.heroIcon} />
              Communauté NumaHOP
            </h1>
            <p className={styles.heroSubtitle}>
              Découvrez l'association NumaHOP et les établissements qui utilisent notre plateforme pour gérer leurs contenus numérisés.
            </p>
          </div>
        </header>

        {/* Présentation de l'association */}
        <section className={styles.association}>
          <h2 className={styles.sectionTitle}>
            <FontAwesomeIcon icon={faHandshake} className={styles.sectionIcon} />
            L'association NumaHOP
          </h2>
          <div className={styles.associationContent}>
            <div className={styles.associationText}>
              <p>
                L'association NumaHOP a été créée en 2018 avec pour mission de développer et promouvoir une plateforme open source de gestion de contenus numérisés pour les bibliothèques, archives et institutions culturelles.
              </p>
              <p>
                Notre objectif est de fournir un outil puissant, flexible et accessible pour la numérisation, l'organisation et la diffusion des collections documentaires.
              </p>
              <p>
                L'association est composée de membres institutionnels et individuels, tous engagés dans la préservation et la valorisation du patrimoine culturel numérique.
              </p>
              <div className={styles.associationStats}>
                <div className={styles.stat}>
                  <div className={styles.statNumber}>20+</div>
                  <div className={styles.statLabel}>Établissements membres</div>
                </div>
                <div className={styles.stat}>
                  <div className={styles.statNumber}>500K+</div>
                  <div className={styles.statLabel}>Documents numérisés</div>
                </div>
                <div className={styles.stat}>
                  <div className={styles.statNumber}>10+</div>
                  <div className={styles.statLabel}>Années d'expérience</div>
                </div>
              </div>
            </div>
            <div className={styles.associationImage}>
              <img src="/img/poster.png" alt="Équipe de l'association NumaHOP" />
            </div>
          </div>
        </section>

        {/* Établissements membres */}
        <section className={styles.membres}>
          <h2 className={styles.sectionTitle}>
            <FontAwesomeIcon icon={faUniversity} className={styles.sectionIcon} />
            Nos établissements membres
          </h2>
          <p className={styles.sectionDescription}>
            NumaHOP est utilisé par de nombreux établissements culturels et éducatifs en France et à l'international.
          </p>
          <div className={styles.membresGrid}>
            {membres.map((membre, index) => (
              <div key={index} className={styles.membreCard}>
                <div className={styles.membreLogo}>
                  <img src={membre.logo} alt={`Logo ${membre.nom}`} />
                </div>
                <h3 className={styles.membreNom}>{membre.nom}</h3>
                <div className={styles.membreType}>
                  <FontAwesomeIcon icon={membre.type === 'Université' ? faUniversity : membre.type === 'Archives' ? faBuilding : faUniversity} />
                  <span>{membre.type}</span>
                </div>
                <p className={styles.membreDescription}>{membre.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Témoignages */}
        <section className={styles.temoignages}>
          <h2 className={styles.sectionTitle}>
            <FontAwesomeIcon icon={faQuoteLeft} className={styles.sectionIcon} />
            Témoignages
          </h2>
          <p className={styles.sectionDescription}>
            Découvrez ce que nos membres disent de NumaHOP.
          </p>
          <div className={styles.temoignagesGrid}>
            {temoignages.map((temoignage, index) => (
              <div key={index} className={styles.temoignageCard}>
                <div className={styles.temoignageHeader}>
                  <img src={temoignage.photo} alt={temoignage.auteur} className={styles.temoignagePhoto} />
                  <div>
                    <h3 className={styles.temoignageAuteur}>{temoignage.auteur}</h3>
                    <p className={styles.temoignageEtablissement}>{temoignage.etablissement}</p>
                  </div>
                </div>
                <div className={styles.temoignageContent}>
                  <FontAwesomeIcon icon={faQuoteLeft} className={styles.quoteIcon} />
                  <p className={styles.temoignageCitation}>{temoignage.citation}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Appel à rejoindre */}
        <section className={styles.rejoindre}>
          <h2 className={styles.sectionTitle}>
            <FontAwesomeIcon icon={faEnvelope} className={styles.sectionIcon} />
            Rejoignez la communauté
          </h2>
          <p className={styles.sectionDescription}>
            Vous êtes une bibliothèque, une archive ou une institution culturelle et vous souhaitez rejoindre la communauté NumaHOP ?
          </p>
          <div className={styles.rejoindreContent}>
            <div className={styles.rejoindreAvantages}>
              <h3>Pourquoi nous rejoindre ?</h3>
              <ul className={styles.avantagesList}>
                <li>Accès à une plateforme puissante et open source</li>
                <li>Participation aux développements futurs</li>
                <li>Formation et support technique</li>
                <li>Réseau d'échanges entre professionnels</li>
                <li>Visibilité dans notre communauté</li>
              </ul>
            </div>
            <div className={styles.rejoindreContact}>
              <h3>Contactez-nous</h3>
              <p>
                Envoyez-nous un message pour discuter de votre projet et des modalités d'adhésion.
              </p>
              <a
                className={clsx('button button--primary button--lg', styles.contactButton)}
                href="mailto:contact@numahop.fr"
              >
                <FontAwesomeIcon icon={faEnvelope} className={styles.buttonIcon} />
                Nous contacter
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CommunautePage;
