import type {ReactNode} from 'react';
import Heading from '@theme/Heading';

import styles from './styles.module.css';

type Tile = {
  title: string;
  description: string;
};

// Tiles split each row evenly, so alternating two- and three-tile rows staggers
// the seams. Longer copy belongs in the two-tile rows to keep row heights even.
const TileRows: Tile[][] = [
  [
    {title: 'App-centric model', description: 'CAP thinks about applications like app devs. Applications are modeled as a collection of high-level resources, not as raw infra.'},
    {title: 'One platform spanning multiple clouds', description: 'GCP, AWS and Azure are already supported, with more on the way. App devs don\'t need to be experts in any of them.'},
  ],
  [
    {title: 'Enterprise-class governance', description: 'All change is coerced through a single auditable path.'},
    {title: 'Multiple resource types', description: 'Databases, object storage buckets, caches, streaming topics and more.'},
    {title: 'Minimal cognitive load', description: 'CAP uses implicit contracts for access, workload identity and networking.'},
  ],
  [
    {title: 'Opinionated externals, adaptable internals', description: 'While the platform interface is simple, CAP resource adapters can front a wide variety of infra technologies.'},
    {title: 'Safe for agents', description: 'By eliminating access to raw infra, CAP reduces context collapse and stops agentic mistakes (like deleting prod databases!)'},
  ],
];

function MOTile({title, description}: Tile) {
  return (
    <div className={styles.tile}>
      <Heading as="h3" className={styles.tileTitle}>
        {title}
      </Heading>
      <p className={styles.tileText}>{description}</p>
    </div>
  );
}

export default function HomepageMO(): ReactNode {
  return (
    <div className={styles.rows}>
      {TileRows.map((row, rowIdx) => (
        <div key={rowIdx} className={styles.row}>
          {row.map((tile, idx) => (
            <MOTile key={idx} {...tile} />
          ))}
        </div>
      ))}
    </div>
  );
}
