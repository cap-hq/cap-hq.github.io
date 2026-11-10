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
    items: ['Registry API', 'Source released under Apache 2.0 license'],
  },
  {
    label: 'Early 2027',
    items: [
      'Service API, App Identity API',
      'CAP UI, capctl',
      'Builds available in public registries'
    ],
  },
  {
    label: 'Late 2027',
    items: [
      'Database API, Bucket API, Cache API, Topic API',
      'Development moves to the open source GitHub org',
      'Project governance established',
    ],
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
