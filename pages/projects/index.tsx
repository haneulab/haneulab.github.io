import Footer from '@components/Footer';
import Header from '@components/Header';
import Layout from '@components/Layout';
import SEO from '@seo/index';
import type { NextPage } from 'next';
import React from 'react';
const Projectspage: NextPage = () => {
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
          <div
            data-page="index"
            className="w-full relative z-10 flex flex-col justify-center"
          >
            <section className="w-full h-full px-8 pt-8 pb-36 grid grid-cols-1 ">
              <div className="flex flex-col justify-center items-center">
                <h3 className="font-bold text-2xl lg:text-4xl mb-8">
                  My Recent Projects
                </h3>
                <div className="w-full max-w-md mx-auto rounded-full border border-slate-500/20 bg-black/5 overflow-x-scroll shadow-inner ">
                  <section className="w-max flex justify-start">
                    <button className="rounded-full font-light md:font-normal lg:font-medium text-sm md:text-lg px-4 md:px-6 lg:px-8 py-2 w-max h-full transition-all hover hover:bg-slate-100 hover:text-slate-800">
                      Web Applications
                    </button>
                    <button className="rounded-full font-light md:font-normal lg:font-medium text-sm md:text-lg px-4 md:px-6 lg:px-8 py-2 w-max h-full transition-all hover hover:bg-slate-100 hover:text-slate-800">
                      Documentations
                    </button>
                    <button className="rounded-full font-light md:font-normal lg:font-medium text-sm md:text-lg px-4 md:px-6 lg:px-8 py-2 w-max h-full transition-all hover hover:bg-slate-100 hover:text-slate-800">
                      Software Packages
                    </button>
                  </section>
                </div>
                <div className="w-full flex flex-col space-y-4 items-center mt-8">
                  <span className="w-4 h-4 rounded-full bg-gradient-to-br from-white/90 to-black/90" />
                  <span className="w-4 h-4 rounded-full bg-gradient-to-br from-white/90 to-black/90" />
                  <span className="w-4 h-4 rounded-full bg-gradient-to-br from-white/90 to-black/90" />
                </div>
                <p className="max-w-md mx-auto text-center leading-8 mt-8">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam porro ut numquam inventore explicabo eaque quas
                  maxime minus! Ab eos sapiente vero non vitae, velit saepe
                  laboriosam nisi debitis incidunt.
                </p>
              </div>
            </section>
          </div>
          <Footer />
        </React.Fragment>
      </Layout>
    </React.Fragment>
  );
};
export default Projectspage;
