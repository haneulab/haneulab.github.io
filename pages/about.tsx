import Layout from '@/layouts/layout';
import Transition from '@/reuse/transition.reuse';
import PageSEO from '@/seo/page.seo';
import type { NextPage } from 'next';
import React from 'react';

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
          className="w-full min-h-screen flex flex-col justify-center items-center"
        >
          <p>Hello World!</p>
        </Transition>
      </Layout.page>
    </React.Fragment>
  );
};
export default Aboutpage;
