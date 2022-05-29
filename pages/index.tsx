import Contact from 'components/Contact';
import Exploration from 'components/Exploration';
import Introduction from 'components/Introduction';
import Box from 'customs/Box';
import BoxWrap from 'customs/BoxWrap';
import { NextPage } from 'next';
import React from 'react';
import DefaultSEO from 'seo/DefaultSEO';

const Homepage: NextPage = () => {
  return (
    <React.Fragment>
      <DefaultSEO
        pageTitle="HaneuLab | Home"
        pageDescription="HaneuLab provides web design & engineering services needed to maintain businesses & enterprises."
        pageKeywords={[
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
      <Box
        className="w-full relative"
        wrapper={
          <BoxWrap
            className="w-full flex flex-col"
            element={
              <React.Fragment>
                {/* insert components */}
                <Introduction />
                <Exploration />
                <Contact />
              </React.Fragment>
            }
          />
        }
      />
    </React.Fragment>
  );
};

export default Homepage;
