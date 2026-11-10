import type {ReactNode} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageHero from '@site/src/components/HomepageHero';
import HomepageSection from '@site/src/components/HomepageSection';
import HomepageMO from '@site/src/components/HomepageMO';
import HomepageAppModel from '@site/src/components/HomepageAppModel';
import HomepageRoadmap from '@site/src/components/HomepageRoadmap';

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout description={siteConfig.tagline}>
      <HomepageHero />
      <main>
        <HomepageSection id="mo" title="The CAP M.O." intro="Let's dig into CAP's core ethos.">
          <HomepageMO />
        </HomepageSection>
        <HomepageSection id="application-model" title="The CAP Application Model" intro="CAP's control plane splits applications into their constiuent resources. Each resource is backed by an abstract model that CAP adapts into specific underlying technologies." muted>
          <HomepageAppModel />
        </HomepageSection>
        <HomepageSection id="roadmap" title="Open Source Roadmap" intro="We want to build CAP with the community.">
          <HomepageRoadmap />
        </HomepageSection>
      </main>
    </Layout>
  );
}
