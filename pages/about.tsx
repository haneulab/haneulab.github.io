/* eslint-disable @next/next/no-img-element */
import Footer from '@components/Footer';
import Header from '@components/Header';
import Layout from '@components/Layout';
import useTheme from '@hooks/useTheme';
import { mergeClasses } from '@libs/index';
import SEO from '@seo/index';
import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';
const Aboutpage: NextPage = () => {
  const { theme } = useTheme();
  return (
    <React.Fragment>
      <SEO
        title="HaneuLab | About"
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
          <div
            data-page="about"
            className="w-full flex flex-col justify-center"
          >
            <section className="w-full max-w-4xl mx-auto h-full px-8 pb-36 pt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <div className="mb-8">
                  <img
                    className="w-full max-w-sm mx-auto rounded-full"
                    alt="Haneul Choi Profile Photo"
                    src="https://scontent-lax3-2.xx.fbcdn.net/v/t31.18172-8/12017454_1637032229909819_4385999793131752350_o.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=HVAY5dekZQ8AX9z6TBC&_nc_ht=scontent-lax3-2.xx&oh=00_AT_8NcChFWI4lnsjNra6mDVpwNvho5XSzN98nL4TR-ylaA&oe=62C91A37"
                  />
                </div>
              </div>
              <div className="lg:col-span-2">
                <h3 className="font-medium text-xl lg:text-2xl pb-1 border-b border-dotted w-max mb-2">
                  Just a bit about me
                </h3>
                <p className="font-thin text-lg leading-8">
                  I am a passionate developer who loves to explore new things
                  and enhance current skills. I also love to work with others
                  who are expert in related field where I can indirectly
                  experience their workflow and how they like the work that they
                  do.
                </p>
              </div>
              <div className="lg:col-span-3">
                <h3 className="font-medium text-xl lg:text-2xl pb-1 border-b border-dotted w-max mb-2">
                  Explore My Projects
                </h3>
                <p className="font-thin text-lg leading-8">
                  Explore my recent projets from web applications, software
                  documentations & packages.
                </p>
                <div className="mt-4">
                  <Link href="/projects">
                    <a
                      className={mergeClasses(
                        'w-max animate-pulse font-medium transition-all hover hover:text-blue-400 flex justify-center space-x-2 items-center',
                        theme === 'dark'
                          ? 'text-blue-400/80 '
                          : 'text-blue-600/80  ',
                      )}
                    >
                      <span>Load My Projects</span>
                      <AiOutlineRight />
                    </a>
                  </Link>
                </div>
              </div>
            </section>
          </div>
          <Footer />
        </React.Fragment>
      </Layout>
    </React.Fragment>
  );
};

export default Aboutpage;
