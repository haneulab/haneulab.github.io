/**
 * react
 */
import React from 'react';
/**
 * types
 */
import type { NextPage } from 'next';
/**
 * components
 */
import Layout from '@/layouts/layout';
import Transition from '@/reuse/transition.reuse';
import PageSEO from '@/seo/page.seo';
import Hero from '@/components/indexpage/index-hero';

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
          <Hero />
        </Transition>
      </Layout.page>
    </React.Fragment>
  );
};
export default Homepage;
