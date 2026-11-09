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
    items: ['Lorem ipsum dolor sit amet', 'Consectetur adipiscing elit', 'Sed do eiusmod tempor', 'Incididunt ut labore'],
  },
  {
    label: 'Early 2027',
    items: ['Ut enim ad minim veniam', 'Quis nostrud exercitation', 'Ullamco laboris nisi'],
  },
  {
    label: 'Late 2027',
    items: [
      'Duis aute irure dolor',
      'In reprehenderit in voluptate',
      'Velit esse cillum dolore',
      'Excepteur sint occaecat',
      'Sunt in culpa qui officia',
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
