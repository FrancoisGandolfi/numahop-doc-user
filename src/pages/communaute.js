import React from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './communaute.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faUniversity, faSchool, faBuilding, faQuoteLeft, faHandshake, faEnvelope, faGlobe, faBook, faScrewdriverWrench, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Liste des établissements membres
const membres = [
  {
    nom: 'Bibliothèque Sainte Geneviève',
    ville: 'Paris',
    logo: '/img/logos/bsg-logo.png',
    siteInternet: 'https://www.bsg.univ-paris3.fr/iguana/www.main.cls',
    bibliothequeNumerique: 'https://genovefa.bsg.univ-paris3.fr/s/genovefa/page/accueil',
  },
  {
    nom: 'Sciences Po Paris',
    ville: 'Paris',
    logo: '/img/logos/sciencespo-logo.png',
    siteInternet: 'hhttps://www.sciencespo.fr/fr/',
    bibliothequeNumerique: 'https://bibnum.sciencespo.fr/s/catalogue/page/accueil',
  },
  {
    nom: 'Université Paris Saclay',
    ville: 'Orsay',
    logo: '/img/logos/saclay-logo.png',
    siteInternet: 'https://www.universite-paris-saclay.fr/',
    bibliothequeNumerique: 'https://numaclay.universite-paris-saclay.fr/s/numaclay/page/accueil',
  },
  {
    nom: 'Bibliothèque de l\'ENS',
    ville: 'Paris',
    logo: '/img/logos/ens-logo.png',
    siteInternet: 'https://www.ens.psl.eu/',
    bibliothequeNumerique: 'https://lucienne.ens.psl.eu/s/lucienne/page/welcome',
  },
  {
    nom: 'BULAC',
    logo: '/img/logos/bulac-logo.png',
    ville: 'Paris',
    siteInternet: 'https://www.bulac.fr/',
    bibliothequeNumerique: 'https://bina.bulac.fr/s/bina/page/welcome',
  },
  {
    nom: 'Humathèque Condorcet',
    ville: 'Aubervilliers',
    logo: '/img/logos/humatheque-logo.png',
    siteInternet: 'https://www.humatheque-condorcet.fr/',
    bibliothequeNumerique: 'https://bibnum.campus-condorcet.fr/s/bibnum/page/accueil',
  },
  {
    nom: 'Bibliothèque nationale de France',
    ville: 'Paris',
    logo: '/img/logos/bnf-logo.png',
    siteInternet: 'https://www.bnf.fr/fr',
    bibliothequeNumerique: 'https://gallica.bnf.fr/accueil/fr/html/accueil-fr',
  },
  {
    nom: 'Museum national d\'histoire naturelle',
    ville: 'Paris',
    logo: '/img/logos/mnhn-logo.png',
    siteInternet: 'https://www.mnhn.fr/fr/bibliotheques-du-museum',
  },
  {
    nom: 'Sorbonne Université',
    ville: 'Paris',
    logo: '/img/logos/sorbonneuniversite-logo.png',
    siteInternet: 'https://www.sorbonne-universite.fr/',
    bibliothequeNumerique: 'https://patrimoine.sorbonne-universite.fr/',
  },
  {
    nom: 'Université Claude Bernard Lyon I',
    ville: 'Lyon',
    logo: '/img/logos/lyon1-logo.png',
    siteInternet: 'https://www.univ-lyon1.fr/',
  },
  {
    nom: 'Médiathèque Simonne Veil',
    ville: 'Valenciennes',
    logo: '/img/logos/simoneveil-logo.png',
    siteInternet: 'https://mediatheques.agglo-pvm.fr/vos-mediatheques/mediatheque-simone-veil',
  },
  {
    nom: 'Institut national d\'Histoire de l\'art',
    ville: 'Paris',
    logo: '/img/logos/inha-logo.png',
    siteInternet: 'https://www.inha.fr/',
    bibliothequeNumerique: 'https://bibliotheque-numerique.inha.fr/',
  },
  {
    nom: 'Archives d\'Alsace',
    ville: 'Strasbourg',
    logo: '/img/logos/archivesalsace-logo.png',
    siteInternet: 'https://archives.alsace.eu/',
  },
  {
    nom: 'Centre d\'études supérieures de la Renaissance',
    ville: 'Tours',
    logo: '/img/logos/cesr-logo.png',
    siteInternet: 'https://cesr.univ-tours.fr/',
  },
  {
    nom: 'Bibliothèque interuniversitaire de la Sorbonne',
    ville: 'Paris',
    logo: '/img/logos/bis-logo.png',
    siteInternet: 'https://www.bis-sorbonne.fr/',
    bibliothequeNumerique: 'https://nubis.bis-sorbonne.fr/',
  },
  {
    nom: 'Musée du Quai Branly',
    ville: 'Paris',
    logo: '/img/logos/mqb-logo.png',
    siteInternet: 'https://www.quaibranly.fr/fr/',
  },
];

// Prestataires
const temoignages = [
  {
    auteur: 'Tech\'Advantage',
    etablissement: '232 avenue Napoléon Bonaparte\n92500 Rueil-Malmaison',
    citation: 'Depuis 30 ans, TECH’advantage aide ses clients à saisir les opportunités offertes par les services numériques dans les domaines scientifiques et culturels. Grâce à notre suivi sur-mesure, nous accompagnons des projets innovants dans des secteurs variés, allant de la mobilité à l\'industrialisation des R&D, en passant par l\'intelligence artificielle.',
    photo: 'https://media.licdn.com/dms/image/v2/C4D0BAQFV28zrEeig-Q/company-logo_200_200/company-logo_200_200/0/1630523069886/techadvantage_logo?e=2147483647&v=beta&t=HBeoc8PZ8YiSG5gqfjJW1m09G7YwTpNdxBBW-xFAB_s',
  },
  {
    auteur: 'BibLibre',
    etablissement: '23 Rue Fauchier\n13002 Marseille',
    citation: 'Notre équipe collabore avec des bibliothèques de toutes tailles à travers le monde. Nous fournissons des logiciels libres adaptés à vos besoins et maintenus par des communautés dynamiques. Nos services vous aident à en tirer le meilleur parti afin que vous puissiez vous concentrer sur l\'essentiel : les usagers de votre bibliothèque.',
    photo: 'https://media.licdn.com/dms/image/v2/C4E0BAQEegkaymyFdtA/company-logo_200_200/company-logo_200_200/0/1630637224690/biblibre_logo?e=2147483647&v=beta&t=y5M9FTYurGPtlD5NfqIoMHiqf2SJB8OxnTeJUuR-quk',
  },
  {
    auteur: 'Sempiternelia',
    etablissement: 'Université Paris 1 Panthéon-Sorbonne',
    citation: 'Services, conseils, développement, hébergement, infogérance et formation en solutions libres pour les humanités numériques et les bibliothèques numériques.',
    photo: '/img/testimonials/sophie-leroy.jpg',
  },
];

const CommunautePage = () => {
  return (
    <Layout title="Communauté NumaHOP" description="Découvrez l'association NumaHOP et ses établissements membres">
      <div className={styles.container}>

        {/* Présentation de l'association */}
        <section className={styles.association}>
          <h2 className={styles.sectionTitle}>
            <FontAwesomeIcon icon={faHandshake} className={styles.sectionIcon} />
            Association NumaHOP
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
                  <div className={styles.statLabel}>Années d\'expérience</div>
                </div>
              </div>
            </div>

            <div className={styles.associationImage}>
              <img src="/img/poster.jpg" alt="Équipe de l'association NumaHOP" />
            </div>

          </div>
        </section>

        <section className={styles.membres}>
          <h2 className={styles.sectionTitle}>
            <FontAwesomeIcon icon={faUniversity} className={styles.sectionIcon} />
            Établissements membres
          </h2>

          <div className={styles.membresGrid}>
            {membres.map((membre, index) => (
              <div key={index} className={styles.membreCard}>
                <div className={styles.membreLogo}>
                  <img src={membre.logo} alt={`Logo ${membre.nom}`} />
                </div>
                <h3 className={styles.membreNom}>{membre.nom}</h3>
                <p>{membre.ville}</p>

                <div className={styles.membreLinks}>
                  {membre.siteInternet && (
                    <a href={membre.siteInternet} target="_blank" rel="noopener noreferrer" className={styles.membreLink}>
                      <FontAwesomeIcon icon={faGlobe} /> Site internet
                    </a>)}
                  {membre.bibliothequeNumerique && (
                    <a href={membre.bibliothequeNumerique} target="_blank" rel="noopener noreferrer" className={styles.membreLink}>
                      <FontAwesomeIcon icon={faBook} /> Bibliothèque numérique
                    </a>)}
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* Témoignages */}
        <section className={styles.temoignages}>
          <h2 className={styles.sectionTitle}>
            <FontAwesomeIcon icon={faScrewdriverWrench} className={styles.sectionIcon} />
            Prestataires
          </h2>
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
        {/* Appel à rejoindre */}
        <section className={styles.rejoindre}>
          <h2 className={styles.sectionTitle}>
            <FontAwesomeIcon icon={faEnvelope} className={styles.sectionIcon} />
            Rejoignez la communauté
          </h2>

          {/* Cartes d\'options (2 colonnes) */}
          <div className={styles.rejoindreOptions}>
            {/* Carte : Liste de diffusion */}
            <div className={clsx(styles.optionCard, styles.cardHover)}>
              <div className={styles.cardIcon}>
                <FontAwesomeIcon icon={faUsers} className={styles.iconStyle} />
              </div>
              <h3 className={styles.cardTitle}>Échangez avec la communauté</h3>
              <p className={styles.cardDescription}>
                Partagez vos retours d\'experience, et apprenez de la communauté des utilisateurs de NumaHop.
              </p>
              <a
                className={clsx('button button--primary', styles.cardButton)}
                href="https://groupes.renater.fr/sympa/info/numahop"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faExternalLinkAlt} className={styles.buttonIcon} />
                Rejoindre la liste Renater
              </a>
            </div>

            {/* Carte : Adhésion à l'association */}
            <div className={clsx(styles.optionCard, styles.cardHover)}>
              <div className={styles.cardIcon}>
                <FontAwesomeIcon icon={faHandshake} className={styles.iconStyle} />
              </div>
              <h3 className={styles.cardTitle}>Devenez membre de l’association</h3>
              <p className={styles.cardDescription}>
                Soutenez le projet et ses developpements en adhérant à l'association NumaHop.
              </p>
              <a
                className={clsx('button button--primary', styles.cardButton)}
                href="mailto:association-numahop@sorbonne-nouvelle.fr?subject=Demande%20d%27adhésion%20à%20NumaHOP&body=Bonjour,%0D%0A%0D%0AJe souhaite adhérer à l%27association NumaHOP. Pouvez-vous me transmettre les modalités ?%0D%0A%0D%0ACordialement,%0D%0A"
              >
                <FontAwesomeIcon icon={faEnvelope} className={styles.buttonIcon} />
                Conatcter l'association NumaHop
              </a>
            </div>
          </div>
        </section>

      </div>
    </Layout>
  );
};

export default CommunautePage;
