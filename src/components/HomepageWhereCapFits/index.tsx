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
    title: 'Existing Platform Tech',
    points: ['Lorem ipsum dolor sit amet', 'Consectetur adipiscing elit', 'Sed do eiusmod tempor', 'Incididunt ut labore'],
  },
  {
    title: 'CAP',
    highlight: true,
    points: ['Ut enim ad minim veniam', 'Quis nostrud exercitation', 'Ullamco laboris nisi', 'Ut aliquip ex ea commodo'],
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
