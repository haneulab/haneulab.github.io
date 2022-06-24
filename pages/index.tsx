import Layout from '@/layouts/layout';
import PageSEO from '@/seo/page.seo';
import type { NextPage } from 'next';
import React from 'react';

const Homepage: NextPage = () => {
  return (
    <React.Fragment>
      {/* seo */}
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
      {/* page ui */}
      <Layout.page>
        <main id="index-page" className="w-full relative">
          <div className="w-full min-h-screen flex flex-col justify-center">
            <section className="w-full h-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-10 xl:grid-cols-11">
              <div className="w-full h-screen flex flex-col justify-center lg:col-span-4 xl:col-span-4 lg:border-r">
                <section className="p-8 md:p-16 lg:px-24">
                  <h2 className="font-semibold text-6xl xl:text-7xl">
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
              <div className="w-full h-full hidden lg:grid lg:grid-cols-2 xl:grid-cols-3 col-span-1 lg:col-span-6 xl:col-span-7 overflow-hidden">
                <article className="w-full h-full flex-col justify-center items-center">
                  <p className="w-full h-1/3 flex flex-col justify-center items-center font-bold">
                    A
                  </p>
                  <p className="w-full h-1/3 flex flex-col justify-center items-center font-bold">
                    B
                  </p>
                  <p className="w-full h-1/3 flex flex-col justify-center items-center font-bold">
                    C
                  </p>
                </article>
                <article className="flex-col justify-center items-center">
                  <p className="w-full h-1/6 flex flex-col justify-center items-center font-bold">
                    Hi
                  </p>
                  <p className="w-full h-2/3 flex flex-col justify-center items-center font-bold">
                    Hi
                  </p>
                  <p className="w-full h-1/6 flex flex-col justify-center items-center font-bold">
                    Hi
                  </p>
                </article>
                <article className="hidden xl:flex flex-col justify-center items-center">
                  <p className="w-full h-1/2 flex flex-col justify-center items-center font-bold">
                    D
                  </p>
                  <p className="w-full h-1/2 flex flex-col justify-center items-center font-bold">
                    E
                  </p>
                </article>
              </div>
            </section>
          </div>
        </main>
      </Layout.page>
    </React.Fragment>
  );
};
export default Homepage;
