/* eslint-disable @next/next/no-img-element */
import { Theme, THEME } from '@components/contexts/Theme';
import { cls } from '@libs/index.helper';
import DefaultSEO from '@seo/DefaultSEO';
import { NextPage } from 'next';
import React, { useContext } from 'react';
const Homepage: NextPage = () => {
  const theme = useContext(Theme);
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
      <div
        className={cls(
          'w-full relative z-20 flex h-screen flex-col justify-center items-center transition-all',
          THEME.container[theme].bg,
          THEME.container[theme].text,
        )}
      >
        <section className="w-full grid grid-cols-1 max-w-4xl mx-auto">
          <div className="px-8 py-16 flex flex-col justify-center items-center">
            <p className="font-bold text-center mb-8 text-3xl md:text-4xl lg:text-5xl leading-10 md:leading-loose uppercase">
              creative web products that businesses & professionals need.
            </p>
            <div className="w-full flex items-center justify-center">
              <button
                className={cls(
                  'bg-gradient-to-br flex items-center shadow-xl justify-center px-6 py-4 text-lg font-medium border rounded-full transition-all hover hover:shadow-2xl',
                  theme === 'dark'
                    ? 'from-slate-700 to-slate-900 border-slate-900/50 hover:from-slate-600 hover:to-slate-800 '
                    : 'from-white/80 to-cyan-200 border-cyan-200/50 hover:from-white/90 hover:to-cyan-300 ',
                )}
              >
                <span>Learn About Our Products</span>
              </button>
            </div>
          </div>
        </section>
      </div>
      <div className="w-max lg:w-full h-screen z-10 absolute top-0 left-0">
        <img
          className="w-full h-full opacity-25"
          src="https://images.unsplash.com/photo-1545670723-196ed0954986?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          alt="Background Image"
        />
      </div>
    </React.Fragment>
  );
};

export default Homepage;
