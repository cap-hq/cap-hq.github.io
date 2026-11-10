import type {ReactNode} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageHero from '@site/src/components/HomepageHero';
import HomepageSection from '@site/src/components/HomepageSection';
import HomepageMO from '@site/src/components/HomepageMO';
import HomepageWhereCapFits from '@site/src/components/HomepageWhereCapFits';
import HomepageAppModel from '@site/src/components/HomepageAppModel';
import HomepageRoadmap from '@site/src/components/HomepageRoadmap';

const capHeader = 'A human and agent friendly alternative to traditional infrastructure automation, built on top of the CNFC landscape.';

const applicationModelHeader = "CAP's control plane splits applications into their constituent resources: services, databases, buckets and so on. Each resource is backed by an abstract model that CAP adapts into specific underlying technologies.";

const roadmapHeader = 'We want to build CAP with the community.';

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout description={siteConfig.tagline}>
      <HomepageHero />
      <main>
        <HomepageSection id="mo" title="The CAP M.O." intro="Let's dig into CAP's core ethos.">
          <HomepageMO />
        </HomepageSection>
        <HomepageSection id="where-cap-fits" title="Where CAP Fits" intro={capHeader} muted>
          <HomepageWhereCapFits />
        </HomepageSection>
        <HomepageSection id="application-model" title="The CAP Application Model" intro={applicationModelHeader}>
          <HomepageAppModel />
        </HomepageSection>
        <HomepageSection id="roadmap" title="Open Source Roadmap" intro={roadmapHeader} muted>
          <HomepageRoadmap />
        </HomepageSection>
      </main>
    </Layout>
  );
}
