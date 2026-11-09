import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';
import BlogPostItemContainer from '@theme/BlogPostItem/Container';
import BlogPostItemHeader from '@theme/BlogPostItem/Header';
import BlogPostItemContent from '@theme/BlogPostItem/Content';
import BlogPostItemFooter from '@theme/BlogPostItem/Footer';
import type {Props} from '@theme/BlogPostItem';
import BlogWrittenBy from '@site/src/components/BlogWrittenBy';

import styles from './styles.module.css';

export default function BlogPostItem({children, className}: Props): ReactNode {
  const {isBlogPostPage} = useBlogPost();
  return (
    <BlogPostItemContainer className={clsx(!isBlogPostPage && styles.card, className)}>
      <BlogPostItemHeader />
      <BlogPostItemContent>{children}</BlogPostItemContent>
      {isBlogPostPage && <BlogWrittenBy />}
      <BlogPostItemFooter />
    </BlogPostItemContainer>
  );
}
