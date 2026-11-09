import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';

import styles from './styles.module.css';

type Props = {
  id: string;
  title: string;
  intro?: ReactNode;
  muted?: boolean;
  children?: ReactNode;
};

export default function HomepageSection({id, title, intro, muted, children}: Props): ReactNode {
  return (
    <section id={id} className={clsx(styles.section, muted && styles.muted)}>
      <div className="container">
        <div className={styles.header}>
          <Heading as="h2" className={styles.title}>
            {title}
          </Heading>
          {intro && <p className={styles.intro}>{intro}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}
