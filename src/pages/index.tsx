import type {ReactNode} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageHero from '@site/src/components/HomepageHero';
import HomepageSection from '@site/src/components/HomepageSection';
import HomepageMO from '@site/src/components/HomepageMO';
import HomepageWhereCapFits from '@site/src/components/HomepageWhereCapFits';
import HomepageAppModel from '@site/src/components/HomepageAppModel';
import HomepageRoadmap from '@site/src/components/HomepageRoadmap';

const LOREM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.';

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout description={siteConfig.tagline}>
      <HomepageHero />
      <main>
        <HomepageSection id="mo" title="The CAP M.O." intro={LOREM}>
          <HomepageMO />
        </HomepageSection>
        <HomepageSection id="where-cap-fits" title="Where CAP Fits" intro={LOREM} muted>
          <HomepageWhereCapFits />
        </HomepageSection>
        <HomepageSection id="application-model" title="The CAP Application Model" intro={LOREM}>
          <HomepageAppModel />
        </HomepageSection>
        <HomepageSection id="roadmap" title="Open Source Roadmap" intro={LOREM} muted>
          <HomepageRoadmap />
        </HomepageSection>
      </main>
    </Layout>
  );
}
