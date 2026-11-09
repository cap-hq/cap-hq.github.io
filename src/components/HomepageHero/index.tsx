import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Heading from '@theme/Heading';
import CappyTall from '@site/static/img/cappy-tall.svg';

import styles from './styles.module.css';

export default function HomepageHero(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.copy}>
          <Heading as="h1" className={styles.wordmark}>
            {siteConfig.title}
          </Heading>
          <p className={styles.subtitle}>{siteConfig.customFields?.subtitle as string}</p>
          <p className={styles.tagline}>{siteConfig.tagline}</p>
          <p className={styles.lede}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className={styles.actions}>
            <Link className={styles.primaryButton} to="/blog">
              Blog
            </Link>
            <Link className={styles.secondaryButton} href="https://github.com/cap-hq">
              GitHub
            </Link>
          </div>
        </div>
        <div className={styles.art}>
          <CappyTall className={styles.cappy} role="img" aria-label="Cappy, the CAP mascot" />
        </div>
      </div>
    </header>
  );
}
