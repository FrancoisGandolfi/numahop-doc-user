import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        {/* Conteneur principal centré */}
        <div className={styles.heroContent}>
          {/* Logo centré */}
          <div className={styles.logoContainer}>
            <img
              src="img/numahop-logo.png"
              alt="Logo NumaHop"
              className={styles.logo}
            />
          </div>

          {/* Tagline sous le logo */}
          <p className={clsx('hero__subtitle', styles.tagline)}>
            {siteConfig.tagline}
          </p>

          {/* Quatre boutons sur une ligne */}
          <div className={styles.buttonsContainer}>
            <Link
              className={clsx('button button--primary', styles.actionButton)}
              to="https://github.com/NumaHOP/">
              Installer <FontAwesomeIcon icon={faExternalLink} className={styles.buttonIcon} />
            </Link>
            <Link
              className={clsx('button button--primary', styles.actionButton)}
              to="/docs/intro">
              Apprendre <FontAwesomeIcon icon={faExternalLink} className={styles.buttonIcon} />
            </Link>
            <Link
              className={clsx('button button--primary', styles.actionButton)}
              to="https://standard-231-numahop.support.biblibre.eu/#/login?redirect=%2Fdashboard">
              Tester <FontAwesomeIcon icon={faExternalLink} className={styles.buttonIcon} />
            </Link>
            <Link
              className={clsx('button button--primary', styles.actionButton)}
              to="https://votre-lien-contribuez.com">
              Contribuer <FontAwesomeIcon icon={faExternalLink} className={styles.buttonIcon} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Documentation professionelle">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
