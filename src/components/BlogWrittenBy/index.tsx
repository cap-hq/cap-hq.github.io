import type {ReactNode} from 'react';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';
import BlogPostItemHeaderAuthors from '@theme/BlogPostItem/Header/Authors';

import styles from './styles.module.css';

export default function BlogWrittenBy(): ReactNode {
  const {metadata} = useBlogPost();
  if (metadata.authors.length === 0) {
    return null;
  }
  return (
    <section className={styles.panel}>
      <h2 className={styles.heading}>Written by</h2>
      <BlogPostItemHeaderAuthors />
    </section>
  );
}
