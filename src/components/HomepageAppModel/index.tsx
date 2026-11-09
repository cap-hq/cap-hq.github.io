import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';

import styles from './styles.module.css';

type Block = {
  name: string;
  description: string;
  placeholder?: boolean;
};

const Registry: Block = {
  name: 'Registry API',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
};

const ResourceApis: Block[] = [
  {name: 'Service API', description: 'Lorem ipsum dolor sit amet.'},
  {name: 'Database API', description: 'Consectetur adipiscing elit.'},
  {name: 'Bucket API', description: 'Sed do eiusmod tempor.'},
  {name: 'Topic API', description: 'Incididunt ut labore.'},
  {name: 'Cache API', description: 'Et dolore magna aliqua.'},
  {name: 'TBD', description: 'Ut enim ad minim veniam.', placeholder: true},
];

const AppIdentity: Block = {
  name: 'App Identity API',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
};

function ModelBlock({name, description, placeholder, className}: Block & {className?: string}) {
  return (
    <div className={clsx(styles.block, placeholder && styles.placeholder, className)}>
      <Heading as="h3" className={styles.blockName}>
        {name}
      </Heading>
      <p className={styles.blockText}>{description}</p>
    </div>
  );
}

export default function HomepageAppModel(): ReactNode {
  return (
    <div className={styles.model}>
      <ModelBlock {...Registry} className={styles.registry} />
      <div className={styles.resources}>
        <div className={styles.grid}>
          {ResourceApis.map((block) => (
            <ModelBlock key={block.name} {...block} />
          ))}
        </div>
        <ModelBlock {...AppIdentity} className={styles.identity} />
      </div>
    </div>
  );
}
