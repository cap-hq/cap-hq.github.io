import type {ReactNode} from 'react';
import Heading from '@theme/Heading';

import styles from './styles.module.css';

type Tile = {
  title: string;
  description: string;
};

// Each inner array renders as one centered row; tiles size to their content.
const TileRows: Tile[][] = [
  [
    {title: 'Lorem ipsum', description: 'Dolor sit amet, consectetur adipiscing elit.'},
    {title: 'Sed do eiusmod', description: 'Tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.'},
    {title: 'Ut enim', description: 'Quis nostrud exercitation.'},
  ],
  [
    {title: 'Duis aute irure', description: 'Dolor in reprehenderit in voluptate velit esse cillum dolore.'},
    {title: 'Excepteur sint', description: 'Occaecat cupidatat non proident.'},
    {title: 'Sunt in culpa', description: 'Qui officia deserunt mollit anim id est laborum, sed ut perspiciatis.'},
  ],
  [
    {title: 'Nemo enim', description: 'Ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.'},
    {title: 'Neque porro', description: 'Quisquam est qui dolorem ipsum.'},
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
