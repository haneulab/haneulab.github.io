import type { NextPage } from 'next';
import { Section, Wrap } from '@motioned-official/react-components';
import React from 'react';
import SEO from 'src/components/reusable/SEO';

const Contact: NextPage = () => {
  return (
    <React.Fragment>
      <SEO />
      <Section className="w-full h-screen flex flex-col justify-center">
        <Wrap className="p-8">
          <>
            <p className="text-sm text-center mb-4">
              <code className="px-2 py-1 rounded-2xl bg-dark-secondary text-dark-blue shadow-md text-sm">
                Contact
              </code>{' '}
              page is currently under construction.
            </p>
            <p className="text-center">
              For any inquries, please contact me via email -{' '}
              <code className="inline-block text-dark-blue">
                haneulchoi.business@gmail.com
              </code>
            </p>
          </>
        </Wrap>
      </Section>
    </React.Fragment>
  );
};
export default Contact;
