import React, {type ReactNode} from 'react';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';
import BlogPostItemHeaderTitle from '@theme/BlogPostItem/Header/Title';
import BlogByline from '@site/src/components/BlogByline';

import styles from './styles.module.css';

export default function BlogPostItemHeader(): ReactNode {
  const {isBlogPostPage} = useBlogPost();
  return (
    <header className={isBlogPostPage ? styles.postHeader : undefined}>
      <BlogPostItemHeaderTitle />
      <BlogByline />
    </header>
  );
}
