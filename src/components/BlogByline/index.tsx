import {Fragment, type ReactNode} from 'react';
import Link from '@docusaurus/Link';
import {translate} from '@docusaurus/Translate';
import {usePluralForm} from '@docusaurus/theme-common';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';

import styles from './styles.module.css';

const listFormat = new Intl.ListFormat('en', {type: 'conjunction'});
const dateFormat = new Intl.DateTimeFormat('en', {day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC'});

export default function BlogByline(): ReactNode {
  const {
    metadata: {authors, date, readingTime},
    assets,
  } = useBlogPost();
  const {selectMessage} = usePluralForm();
  const named = authors.filter(({name}) => name);
  // listFormat only joins strings, so format placeholders and swap each one for a (possibly linked) name.
  const nameParts = listFormat.formatToParts(named.map((_, idx) => String(idx)));
  const images = authors.flatMap(({imageURL}, idx) => {
    const src = assets.authorsImageUrls[idx] ?? imageURL;
    return src ? [src] : [];
  });
  const minutes = readingTime === undefined ? undefined : Math.ceil(readingTime);

  return (
    <div className={styles.byline}>
      {images.length > 0 && (
        <span className={styles.avatars} aria-hidden="true">
          {images.map((src) => (
            <img key={src} src={src} alt="" className={styles.avatar} />
          ))}
        </span>
      )}
      <div>
        {named.length > 0 && (
          <div className={styles.names}>
            {nameParts.map(({type, value}, idx) => {
              if (type === 'literal') {
                return <Fragment key={idx}>{value}</Fragment>;
              }
              const {name, url, email, page} = named[Number(value)];
              const href = page?.permalink ?? url ?? (email && `mailto:${email}`);
              return href ? (
                <Link key={idx} href={href}>
                  {name}
                </Link>
              ) : (
                <Fragment key={idx}>{name}</Fragment>
              );
            })}
          </div>
        )}
        <div className={styles.info}>
          <time dateTime={date}>{dateFormat.format(new Date(date))}</time>
          {minutes !== undefined && (
            <>
              {' · '}
              {selectMessage(
                minutes,
                translate(
                  {id: 'theme.blog.post.readingTime.plurals', message: 'One min read|{readingTime} min read'},
                  {readingTime: minutes},
                ),
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
