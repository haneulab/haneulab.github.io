import type { NextPage } from 'next';
import { Section, Wrap } from '@motioned-official/react-components';
import React from 'react';
import SEO from 'src/components/reusable/SEO';
import works from 'src/data/works';
import WorkCard from 'src/components/reusable/WorkCard';

const Projects: NextPage = () => {
  return (
    <React.Fragment>
      <SEO />
      <Section className="w-full min-h-screen flex flex-col justify-center">
        <Wrap className="px-8 py-28 max-w-6xl mx-auto">
          <>
            <div className="mb-8">
              <h2 className="text-dark-blue text-center text-2xl font-bold font-roboto mb-4">
                Projects By <span className="text-dark-light">Haneul Choi</span>
              </h2>
              <p className="text-base leading-7 lg:text-lg lg:leading-8 text-center max-w-2xl mx-auto">
                The following list of projects represent what I have worked or
                been working with. Please go to the project detail page for
                project specific data such as long description, tech stacked
                used, so on.
              </p>
            </div>
            <div>
              <section className="py-12 border-t border-dark-blue grid grid-cols-1 gap-8">
                {works.map((each, index) => (
                  <WorkCard key={index} {...each} />
                ))}
              </section>
            </div>
          </>
        </Wrap>
      </Section>
    </React.Fragment>
  );
};
export default Projects;
