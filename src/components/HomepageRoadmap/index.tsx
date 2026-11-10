import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';

import styles from './styles.module.css';

type Milestone = {
  label: string;
  current?: boolean;
  items: string[];
};

const Milestones: Milestone[] = [
  {
    label: 'Now',
    current: true,
    items: ['Registry API', 'Source released under the Apache 2.0 license',],
  },
  {
    label: 'Early 2027',
    items: ['Service API and App Identity API', 'Builds available in public registries',],
  },
  {
    label: 'Late 2027',
    items: ['Database, Bucket, Topic, and Cache APIs', 'All development moves to the open source organization', 'Project governance is established',],
  },
];

export default function HomepageRoadmap(): ReactNode {
  return (
    <ol className={styles.timeline}>
      {Milestones.map(({label, current, items}) => (
        <li key={label} className={clsx(styles.milestone, current && styles.current)}>
          <div className={styles.marker} aria-hidden="true" />
          <Heading as="h3" className={styles.label}>
            {label}
          </Heading>
          <ul className={styles.items}>
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}
