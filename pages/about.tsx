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
import Hero from '@/components/aboutpage/about-hero';

const Aboutpage: NextPage = () => {
  return (
    <React.Fragment>
      <PageSEO
        title="About"
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
        <Transition
          id="about-page"
          className="w-full min-h-screen flex flex-col justify-center"
        >
          <>
            <Hero />
          </>
        </Transition>
      </Layout.page>
    </React.Fragment>
  );
};
export default Aboutpage;
