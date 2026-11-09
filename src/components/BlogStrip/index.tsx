import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import {useBlogMetadata} from '@docusaurus/plugin-content-blog/client';

import styles from './styles.module.css';

export default function BlogStrip(): ReactNode {
  const {blogBasePath, blogTitle} = useBlogMetadata();
  return (
    <div className={styles.strip}>
      <div className="container">
        <Link to={blogBasePath} className={styles.back}>
          ← {blogTitle}
        </Link>
      </div>
    </div>
  );
}
