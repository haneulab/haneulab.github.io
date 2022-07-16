/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import React from 'react';
import { Section, Wrap, Content } from '@motioned-official/react-components';
import Link from 'next/link';
import SEO from 'src/components/reusable/SEO';
const Home: NextPage = () => {
  return (
    <React.Fragment>
      <SEO />
      <Section className="h-screen w-full relative flex flex-col items-center justify-center">
        <>
          <Content
            displayType="block"
            className="absolute w-full max-w-6xl mx-auto z-0 transform left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
          >
            <ul className="flex p-8 items-center justify-between space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-8 xl:space-x-12">
              <span className="w-10 h-10 bg-dark-blue/50 animate-spin" />
              <span className="w-10 h-10 rounded-full bg-dark-blue/50 animate-bounce" />
              <span className="w-10 h-10 rounded-full bg-dark-blue/50 animate-ping" />
              <span className="w-10 h-10 rounded-full bg-dark-blue/50 animate-ping" />
              <span className="w-10 h-10 rounded-full bg-dark-blue/50 animate-bounce" />
              <span className="w-10 h-10 bg-dark-blue/50 animate-spin" />
            </ul>
          </Content>
          <Wrap className="p-8 relative z-10 w-full h-full flex flex-col items-center justify-center backdrop-blur-sm bg-transparent">
            <>
              <Content displayType="block" className="w-full max-w-xs mx-auto">
                <img
                  src="images/Hero_Image.png"
                  alt="HaneuLab Landing Page Image"
                  className="lg:opacity-75 backdrop-blur-sm"
                />
              </Content>
              <Content
                displayType="block"
                className="flex flex-col items-center relative backdrop-blur-md"
              >
                <>
                  <h2 className="font-light text-lg text-light-secondary">
                    Hi, I am{' '}
                    <span className="text-2xl text-dark-blue font-roboto">
                      Haneul Choi
                    </span>
                  </h2>
                  <p className="font-medium text-xl mb-12 text-light-secondary">
                    <span className="text-3xl text-dark-blue font-roboto">
                      Software Developer
                    </span>
                  </p>
                  <div>
                    <Link href="/projects">
                      <a className="px-5 py-3 rounded-full bg-dark-blue font-medium text-lg transition-all shadow-xl lg:hover:bg-dark-blue/80 lg:hover:shadow-sm">
                        Explore My Projects
                      </a>
                    </Link>
                  </div>
                </>
              </Content>
            </>
          </Wrap>
        </>
      </Section>
    </React.Fragment>
  );
};
export default Home;
