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
  description: 'Create applications, manage teams, and authenticate with the platform.',
};

const ResourceApis: Block[] = [
  {name: 'Service API', description: 'Deploy and manage containerized backends, frontends, and more.'},
  {name: 'Database API', description: 'Provision and operate Postgres databases.'},
  {name: 'Bucket API', description: 'Provision and manage object storage buckets.'},
  {name: 'Topic API', description: 'Create and manage Kafka streaming topics.'},
  {name: 'Cache API', description: 'Provision and operate Redis caches.'},
  {name: 'Future APIs', description: 'The abstractions will continue until morale improves.', placeholder: true},
];

const AppIdentity: Block = {
  name: 'App Identity API',
  description: 'Cloud native identity and access management for resources across an application.',
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
