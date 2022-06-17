import Footer from '@components/Footer';
import Header from '@components/Header';
import Layout from '@components/Layout';
import { mergeClasses } from '@libs/index';
import SEO from '@seo/index';
import type { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import { SiBmcsoftware } from 'react-icons/si';
const Projectspage: NextPage = () => {
  const [initialRender, setInitialRender] = useState<boolean>(false);
  const [uiOption, setUiOption] = useState<'in' | 'via' | 'out' | null>(null);
  const [categoryChosen, setCategoryChosen] = useState<boolean>(false);
  const [category, setCategory] = useState<string>('');
  const onButtonClick = (option: string) => {
    setUiOption(null);
    setCategoryChosen(false);
    setTimeout(() => {
      setCategory(option);
      setCategoryChosen(true);
    }, 100);
  };
  useEffect(() => {
    setTimeout(() => {
      setInitialRender(true);
    }, 100);
  }, []);
  useEffect(() => {
    if (initialRender) {
      setUiOption('in');

      setTimeout(() => {
        setUiOption('via');
        setTimeout(() => {
          setUiOption('out');
        }, 100);
      }, 100);
    }
  }, [initialRender, categoryChosen]);
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
            className="w-full relative z-10 flex flex-col justify-center min-h-screen"
          >
            <section className="w-full h-full px-8 py-36 grid grid-cols-1 ">
              <div className="flex flex-col justify-center items-center">
                <h3 className="font-bold text-2xl lg:text-4xl mb-8">
                  My Recent Projects
                </h3>
                <div className="w-full max-w-md mx-auto rounded-full border border-slate-500/20 bg-black/5 overflow-x-scroll shadow-inner ">
                  <section className="w-max flex justify-start">
                    <button
                      onClick={() => onButtonClick('web service')}
                      className="rounded-full font-light md:font-normal lg:font-medium text-sm md:text-lg px-4 md:px-6 lg:px-8 py-2 w-max h-full transition-all hover hover:bg-white/90 hover:text-slate-800"
                    >
                      Web Service
                    </button>
                    <button
                      onClick={() => onButtonClick('software packages')}
                      className="rounded-full font-light md:font-normal lg:font-medium text-sm md:text-lg px-4 md:px-6 lg:px-8 py-2 w-max h-full transition-all hover hover:bg-white/90 hover:text-slate-800"
                    >
                      Software Packages
                    </button>
                    <button
                      onClick={() => onButtonClick('web documentations')}
                      className="rounded-full font-light md:font-normal lg:font-medium text-sm md:text-lg px-4 md:px-6 lg:px-8 py-2 w-max h-full transition-all hover hover:bg-white/90 hover:text-slate-800"
                    >
                      Web Documentations
                    </button>
                  </section>
                </div>
                <div
                  className={mergeClasses(
                    'flex flex-col space-y-4 items-center mt-8 transition-all transform',
                    categoryChosen ? 'translate-x-0' : 'hidden translate-y-100',
                  )}
                >
                  <span
                    className={mergeClasses(
                      'transition-all transform rounded-full bg-gradient-to-br from-white via-slate-400 to-black/100  ',
                      uiOption
                        ? 'w-4 h-4 opacity-100 translate-y-0'
                        : 'w-1 h-1 opacity-0 -translate-y-16',
                    )}
                  />
                  <span
                    className={mergeClasses(
                      'transition-all transform rounded-full bg-gradient-to-br from-white via-slate-400 to-black/100  ',
                      uiOption && uiOption !== 'in'
                        ? 'w-4 h-4 opacity-100 translate-y-0'
                        : 'w-1 h-1 opacity-0 -translate-y-12',
                    )}
                  />
                  <span
                    className={mergeClasses(
                      'transition-all transform rounded-full bg-gradient-to-br from-white via-slate-400 to-black/100  ',
                      uiOption && uiOption !== 'in' && uiOption !== 'via'
                        ? 'w-4 h-4 opacity-100 translate-y-0'
                        : 'w-1 h-1 opacity-0 -translate-y-8',
                    )}
                  />
                </div>
                {!categoryChosen && (
                  <p className="max-w-md mx-auto text-center leading-8 mt-8">
                    Please choose the category that you&apos;d like to see my
                    projects.
                  </p>
                )}
                {categoryChosen && (
                  <div className="w-full mt-12 relative border">
                    <p className="absolute w-max flex items-center space-x-2 -top-16 z-20 backdrop-blur-md px-4 py-2 left-1/2 transform -translate-x-1/2  capitalize text-center leading-8 mt-10 rounded-full border shadow-sm">
                      <SiBmcsoftware />
                      <span>{category}</span>
                    </p>
                    <section className="relative p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <article className="min-h-screen">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Amet enim quam nulla impedit nisi consectetur
                        maiores sunt consequuntur veniam perspiciatis sapiente
                        qui voluptatem officiis assumenda error, sed natus in
                        deleniti!
                      </article>
                      <article className="min-h-screen">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Vel aperiam minus fuga dicta rem optio sapiente soluta
                        ipsam dolore iusto earum autem, repudiandae, quisquam
                        debitis adipisci? Modi illum neque ea!
                      </article>
                    </section>
                  </div>
                )}
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
