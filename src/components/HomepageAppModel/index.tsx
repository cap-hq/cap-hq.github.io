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
  description: 'The foundation of the CAP application model, providing a system of record for applications, teams, ownership, and platform metadata.',
};

const ResourceApis: Block[] = [
  {name: 'Service API', description: 'Deploy and operate containerized services with built-in traffic management.'},
  {name: 'Database API', description: 'Provision and manage PostgreSQL databases through a consistent CAP abstraction.'},
  {name: 'Bucket API', description: 'Provision and manage S3-style object storage without cloud-specific configuration.'},
  {name: 'Topic API', description: 'Create and manage Kafka topics as application resources.'},
  {name: 'Cache API', description: 'Provision and manage Redis caches as application resources.'},
  {name: 'Future APIs', description: 'We will keep abstracting things until morale improves.', placeholder: true},
];

const AppIdentity: Block = {
  name: 'App Identity API',
  description: 'Cloud-native identity and access management for resources across an application.',
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
