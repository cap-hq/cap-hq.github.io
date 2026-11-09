import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import type {Props} from '@theme/Footer/Layout';
import Cappy from '@site/static/img/cappy.svg';

import styles from './styles.module.css';

// Brand block on the left, link columns on the right, copyright across the bottom.
export default function FooterLayout({style, links, logo, copyright}: Props): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <footer className={clsx('footer', style === 'dark' && 'footer--dark', styles.footer)}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link to="/" className={styles.brandLink}>
              <Cappy className={styles.logo} aria-hidden="true" />
              <span className={styles.names}>
                <span className={styles.wordmark}>{siteConfig.title}</span>
                <span className={styles.subtitle}>{siteConfig.customFields?.subtitle as string}</span>
              </span>
            </Link>
          </div>
          <div className={styles.links}>{links}</div>
        </div>
        {(logo || copyright) && (
          <div className={styles.bottom}>
            {logo}
            {copyright}
          </div>
        )}
      </div>
    </footer>
  );
}
