import Layout from '@/layouts/layout';
import Transition from '@/reuse/transition.reuse';
import PageSEO from '@/seo/page.seo';
import type { NextPage } from 'next';
import React from 'react';

const Homepage: NextPage = () => {
  return (
    <React.Fragment>
      <PageSEO
        title="Home"
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
        <Transition>
          <main id="index-page" className="w-full relative">
            <div className="w-full min-h-screen flex flex-col justify-center">
              <section className="w-full h-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-10 xl:grid-cols-11">
                <div className="relative w-full h-screen flex flex-col justify-center lg:col-span-4 xl:col-span-4 lg:border-r">
                  <section className="p-8 md:p-16 lg:px-24">
                    <h2 className="font-normal text-4xl lg:text-5xl">
                      HaneuLab
                    </h2>
                    <h4 className="font-normal text-gray-500 flex flex-col">
                      <span className="text-2xl xl:text-3xl">
                        Software Developer
                      </span>
                      <span className="text-lg xl:text-xl">
                        Based in California,
                      </span>
                    </h4>
                    <p className="font-light text-gray-400 text-xl xl:text-2xl">
                      Freelancer & Project Developer
                    </p>
                    <div className="mt-8">
                      <button className="flex items-center px-8 py-3 border font-medium text-gray-500 transition-all hover hover:text-gray-700 hover:border-gray-700">
                        <span>Project Museum</span>
                      </button>
                    </div>
                  </section>
                </div>
                <div className="relative col-span-1 lg:col-span-6 xl:col-span-7 h-full self-center overflow-hidden flex flex-col items-center justify-center">
                  <img
                    src="haneulab_image_1.png"
                    className="w-full lg:h-full xl:h-auto hidden lg:block opacity-50 absolute z-10"
                  />
                  <article className="relative z-20 bg-black/50 text-white shadow-xl w-full h-full flex flex-col justify-center mx-auto px-8 py-32 md:px-16 lg:px-24">
                    <h3 className="font-bold text-4xl mb-4 w-max pb-2">
                      Recent Activity
                    </h3>
                    <section className="w-full">
                      <h4 className="text-2xl inline font-medium">
                        UniRound Service Development{' '}
                        <span className="inline text-lg font-normal">
                          is a full-stack service that I am building with my
                          team{' '}
                          <a
                            href="https://github.com/uniround"
                            className="font-medium underline text-blue-300"
                          >
                            UniRound
                          </a>
                          . The project is taking various phases from{' '}
                          <strong className="font-medium text-gray-100 italic">
                            research, design, and development
                          </strong>{' '}
                          for about 3 months starting fro June 2022 to September
                          2022.
                        </span>
                      </h4>
                      <div className="mt-8">
                        <button className="px-8 py-3 bg-gray-800 text-white text-lg font-medium rounded-lg transition-all hover hover:bg-black/50 backdrop-blur-sm">
                          Project Detail
                        </button>
                      </div>
                    </section>
                  </article>
                </div>
              </section>
            </div>
          </main>
        </Transition>
      </Layout.page>
    </React.Fragment>
  );
};
export default Homepage;
