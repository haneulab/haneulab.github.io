/* eslint-disable @next/next/no-img-element */
import { THEME, Theme } from '@components/contexts/Theme';
import ExpertiesCardList from '@components/pages/index-components/ExpertiesCardList';
import { cls } from '@libs/index.helper';
import DefaultSEO from '@seo/DefaultSEO';
import { NextPage } from 'next';
import React, { useContext } from 'react';
import { FiMenu } from 'react-icons/fi';
import {
  AiOutlineShoppingCart,
  AiOutlineDesktop,
  AiOutlineMobile,
  AiOutlineTablet,
} from 'react-icons/ai';
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
        <section className="w-full min-h-screen relative z-10 grid grid-cols-1 lg:grid-cols-2 mx-auto">
          <div className="w-full h-full justify-center px-8 py-28 flex flex-col items-center">
            <h3 className="font-bold text-4xl md:text-5xl lg:text-6xl text-center mb-4">
              Technical Expertise
            </h3>
            <p className="text-center font-medium md:text-lg lg:text-xl mb-8 md:mb-12 lg:mb-16">
              Our products serve our clients in the most efficient & effective
              ways
            </p>
            <ExpertiesCardList />
          </div>
          <div
            className={cls(
              'px-4 lg:px-8 py-28 w-full h-screen flex flex-col justify-center items-center relative transition-all',
              theme === 'dark' ? 'bg-black/90' : 'bg-white/80',
            )}
          >
            <div className="w-full max-w-xs h-full max-h-[680px] p-2 bg-gradient-to-r from-black/90 via-zinc-800 to-black/90 mx-auto border border-slate-50/10 shadow-2xl rounded-2xl shadow-blue-900/25">
              <div className="relative w-full h-full flex flex-col justify-center border p-2 bg-black/50 rounded-xl border-slate-50/10">
                <span className="absolute left-1/2 transform -translate-x-1/2 top-2 w-10 h-2 rounded-full bg-white/10 border border-slate-500/50" />
                <div className="w-full overflow-hidden h-5/6 bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-600 text-white/90 relative">
                  <div className="p-4 flex justify-between items-center">
                    <h5 className="font-bold text-lg">Shoppest</h5>
                    <FiMenu className="text-xl" />
                  </div>
                  <div className="w-full h-full flex flex-col items-center overflow-hidden">
                    <section className="w-11/12 mx-auto mb-4 rounded-full border-2 border-blue-400/50 px-4 py-2 flex items-center overflow-hidden">
                      <span className="text-xs text-slate-400">
                        Search the product
                      </span>
                    </section>
                    <div className="w-full h-full bg-gradient-to-br from-slate-900/90 to-blue-900/90  ">
                      <section className="px-4 py-8">
                        <div className="w-full grid grid-cols-3 gap-2 mb-6">
                          <span className="text-xs text-center p-1 px-3 rounded-full border">
                            IT
                          </span>
                          <span className="text-xs text-center p-1 px-3 rounded-full border">
                            Food
                          </span>
                          <span className="text-xs text-center p-1 px-3 rounded-full border">
                            School
                          </span>
                        </div>
                        <div className="w-full flex flex-col">
                          <div className="w-full">
                            <img
                              src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/4k-monitors-1536780774.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*"
                              alt=""
                            />
                            <h5 className="text-sm font-medium mt-4 mb-2">
                              4K Display Workstation Monitor
                            </h5>
                            <p className="font-light text-xs text-slate-300">
                              Workstation external monitor suitable for daily
                              office work.
                            </p>
                            <div className="w-full mt-2 flex justify-between items-center">
                              <span className="font-bold text-base">
                                $329.99
                              </span>
                              <button className="px-4 py-1 text-sm rounded-md shadow-md bg-orange-500 text-white font-medium">
                                <span className="flex items-center space-x-2">
                                  <span>Add</span> <AiOutlineShoppingCart />
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute w-full bottom-14 max-w-md mx-auto  bg-gradient-to-br from-white/0 via-white/0 to-white/0  rounded-md text-indigo-500">
              <section className="px-8 py-4 w-full grid grid-cols-3 gap-4 items-center">
                <div className="w-full flex flex-col items-center space-y-2 font-bold px-5 py-3 rounded-md border border-slate-50/25 transition-all hover hover:border-indigo-500/90 cursor-pointer backdrop-blur-sm transform hover hover:scale-105">
                  <AiOutlineDesktop className="text-2xl" />
                  <span>Desktop</span>
                </div>
                <div className="w-full flex flex-col items-center space-y-2 font-bold px-5 py-3 rounded-md border border-slate-50/25 transition-all hover hover:border-indigo-500/90 cursor-pointer backdrop-blur-sm transform hover hover:scale-105">
                  <AiOutlineTablet className="text-2xl" />
                  <span>Tablet</span>
                </div>
                <div className="w-full flex flex-col items-center space-y-2 font-bold px-5 py-3 rounded-md border border-slate-50/25 transition-all hover hover:border-indigo-500/90 cursor-pointer backdrop-blur-sm transform hover hover:scale-105">
                  <AiOutlineMobile className="text-2xl" />
                  <span>Mobile</span>
                </div>
              </section>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default Homepage;
