import Footer from '@components/Footer';
import Header from '@components/Header';
import Introduction from '@components/index/introduction.index';
import Layout from '@components/Layout';
import SEO from '@seo/index';
import type { NextPage } from 'next';
import React from 'react';

const Homepage: NextPage = () => {
  return (
    <React.Fragment>
      <SEO
        title="HaneuLab | Home"
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
      <Layout>
        <React.Fragment>
          <Header />
          <Introduction />
          <Footer />
        </React.Fragment>
      </Layout>
    </React.Fragment>
  );
};

export default Homepage;
