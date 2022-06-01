/* eslint-disable @next/next/no-img-element */
import { THEME, Theme } from '@components/contexts/Theme';
import { cls } from '@libs/index.helper';
import DefaultSEO from '@seo/DefaultSEO';
import type { NextPage } from 'next';
import React, { useContext, useState } from 'react';

import DeviceUI from '@components/pages/index-components/DeviceUI';
import ExpertiseUI from '@components/pages/index-components/ExpertiseUI';
const Homepage: NextPage = () => {
  const theme = useContext(Theme);
  const [uiType, setUIType] = useState<
    'design' | 'communication' | 'price' | 'service'
  >('design');
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
          'w-full relative z-10 flex h-screen flex-col justify-center items-center transition-all',
          theme === 'dark' ? 'bg-black/70' : 'bg-white/70',
        )}
      >
        <section className="w-full relative z-10 grid grid-cols-1 max-w-6xl mx-auto">
          <div className="px-8 py-16 flex flex-col justify-center items-center">
            <h2 className="text-center mb-8 flex flex-col">
              <span className="font-bold text-5xl lg:text-6xl leading-[3.5rem]">
                Creative Software Products
              </span>
              <span className="font-medium text-3xl lg:text-4xl my-4">
                Desgined to Support
              </span>
              <span className="font-normalt text-xl lg:text-2xl">
                Businesses & Professionals
              </span>
            </h2>
            <div className="w-full flex items-center justify-center">
              <button
                className={cls(
                  'bg-gradient-to-br flex items-center shadow-xl justify-center px-6 py-4 text-lg font-semibold border rounded-full transition-all hover hover:shadow-2xl',
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
        <div className="w-max lg:w-full h-screen z-0 absolute top-0 left-0">
          <img
            className="w-full h-full opacity-25"
            src="https://images.unsplash.com/photo-1545670723-196ed0954986?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            alt="Background Image"
          />
        </div>
      </div>
      <div
        className={cls(
          'w-full relative z-10 flex min-h-screen flex-col justify-center items-center transition-all',
          // theme === 'dark' ? 'bg-black/70' : 'bg-white/70',
          THEME.container[theme].bg,
          THEME.container[theme].text,
        )}
      >
        <section className="w-full relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 z-10 mx-auto">
          <ExpertiseUI setUIType={setUIType} />
          {/* DeviceUI open on uiType === 'design' : default */}
          <DeviceUI deviceUIOpen={uiType} />
        </section>
      </div>
    </React.Fragment>
  );
};

export default Homepage;
