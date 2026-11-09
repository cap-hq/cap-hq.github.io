import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Cappy from '@site/static/img/cappy.svg';

import styles from './styles.module.css';

type Props = {
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
};

export default function BlogMasthead({title, description, children}: Props): ReactNode {
  return (
    <header className={styles.masthead}>
      <div className={clsx('container', styles.inner)}>
        <div className={styles.copy}>
          <Heading as="h1" className={styles.title}>
            {title}
          </Heading>
          {description && <p className={styles.description}>{description}</p>}
          {children && <div className={styles.extra}>{children}</div>}
        </div>
        <Cappy className={styles.cappy} aria-hidden="true" />
      </div>
    </header>
  );
}
