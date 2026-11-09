import type {ReactNode} from 'react';
import clsx from 'clsx';
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
          <p className={clsx(styles.lede, styles.hook)}>
            Application developers and agents already have enough to do. So why do we keep torturing
            them with the sharpest edges of cloud infrastructure?
          </p>
          <p className={styles.lede}>
            CAP is a human-and-agent friendly alternative to traditional infra automation, focused on
            applications, and built on top of the CNCF landscape. And we're open sourcing it over the
            next year. We hope you'll join us on the journey!
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
