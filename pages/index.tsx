import About from '@/components/indexpage/index-about';
import FlowImage from '@/components/indexpage/index-flowImage';
import Hero from '@/components/indexpage/index-hero';
import Projects from '@/components/indexpage/index-projects';
import Layout from '@/layouts/layout';
import Transition from '@/reuse/transition.reuse';
import PageSEO from '@/seo/page.seo';
import type { NextPage } from 'next';
import React from 'react';

const Homepage: NextPage = () => {
  return (
    <React.Fragment>
      <PageSEO
        title="Home"
        description="HaneuLab provides web design & engineering services needed to maintain businesses & enterprises."
        keywords={[
          'Web Development',
          'Web Design',
          'Web Service',
          'SEO',
          'Business',
          'Business Website',
          'Marketing',
          'Business Marketing',
        ]}
      />
      <Layout.page>
        <Transition id="index-page" className="w-full relative">
          <>
            <Hero />
            <FlowImage />
            <About />
            <Projects />
          </>
        </Transition>
      </Layout.page>
    </React.Fragment>
  );
};
export default Homepage;
