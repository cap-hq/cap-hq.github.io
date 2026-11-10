import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';

import styles from './styles.module.css';

type Comparison = {
  title: string;
  points: string[];
  highlight?: boolean;
};

const Comparisons: Comparison[] = [
  {
    title: 'Business as Usual',
    points: ['Forces app devs to be infra experts', 'Tightly couples apps to specific clouds', 'Tries to expose as many knobs as possible', 'Permits change from many directions'],
  },
  {
    title: 'The CAP Approach',
    highlight: true,
    points: ['Makes the platform responsible for infra complexity', 'Keeps apps abstract and portable across clouds', 'Hides most (not all) knobs', 'Coerces all changes through a single auditable path'],
  },
];

function ComparisonCard({title, points, highlight}: Comparison) {
  return (
    <div className={clsx(styles.card, highlight && styles.highlight)}>
      <Heading as="h3" className={styles.title}>
        {title}
      </Heading>
      <ul className={styles.points}>
        {points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </div>
  );
}

export default function HomepageWhereCapFits(): ReactNode {
  return (
    <div className={styles.cards}>
      {Comparisons.map((comparison) => (
        <ComparisonCard key={comparison.title} {...comparison} />
      ))}
    </div>
  );
}
