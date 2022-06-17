import Footer from '@components/Footer';
import Header from '@components/Header';
import Layout from '@components/Layout';
import SEO from '@seo/index';
import type { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import { BsGithub, BsLinkedin, BsDiscord, BsPersonPlus } from 'react-icons/bs';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
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
      <Header />
      <Layout>
        <React.Fragment>
          <div
            data-page="index"
            className="w-full relative z-10 flex flex-col justify-center items-center min-h-screen"
          >
            <section className="w-full h-full px-8 py-36 grid grid-cols-1">
              <div className="w-full h-full flex flex-col justify-center items-center">
                <h2 className="font-bold text-4xl mb-4 text-center">
                  Hi, My name is Haneul Choi.
                </h2>
                <p className="font-normal text-xl leading-8 text-center">
                  I am a software developer who design & build web applications
                  & some software packages.
                </p>
              </div>
              <div className="mt-8 mb-16 w-full flex flex-col space-y-4 max-w-md mx-auto md:grid grid-cols-2 md:space-y-0 md:gap-4">
                <Link href="/about">
                  <a className="flex justify-between items-center px-4 py-2 rounded-md font-medium border border-slate-500/90  hover hover:border-slate-300 hover:text-slate-400 transition-all">
                    <span>About Me</span>
                    <BsPersonPlus />
                  </a>
                </Link>
                <Link href="/projects">
                  <a className="flex justify-between items-center px-4 py-2 rounded-md font-medium border border-slate-500/90  hover hover:border-slate-300 hover:text-slate-400 transition-all">
                    <span>My Projects</span>
                    <AiOutlineFundProjectionScreen />
                  </a>
                </Link>
              </div>
              <div className="flex items-center space-x-4 justify-center">
                <a
                  className="transition-all text-2xl transform hover hover:rotate-12 hover:scale-125 hover:opacity-50"
                  href="https://github.com/haneulab"
                >
                  <BsGithub />
                </a>
                <a
                  className="transition-all text-2xl transform hover hover:rotate-12 hover:scale-125 hover:opacity-50"
                  href="https://linkedin.com/in/haneulab"
                >
                  <BsLinkedin />
                </a>
                <a
                  className="transition-all text-2xl transform hover hover:rotate-12 hover:scale-125 hover:opacity-50"
                  href="#"
                >
                  <BsDiscord />
                </a>
              </div>
            </section>
          </div>
          <Footer />
        </React.Fragment>
      </Layout>
    </React.Fragment>
  );
};

export default Homepage;
