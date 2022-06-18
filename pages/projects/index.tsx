import ProjectButton from '@components/button.projects';
import ProjectContainer from '@components/container.projects';

import Footer from '@components/Footer';
import Header from '@components/Header';

import Layout from '@components/Layout';
import InitialParagraph from '@components/paragraph.projects';
import SoftwarePackages from '@components/softwarepackages.projects';
import ProjectTitle from '@components/title.projects';
import WebDocumentations from '@components/webdocumentations.projects';
import WebServices from '@components/webservice.project';
import { mergeClasses } from '@libs/index';
import SEO from '@seo/index';
import type { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
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
            className="w-full relative z-10 flex flex-col justify-center min-h-screen "
          >
            <section className="w-full px-8 py-36 grid grid-cols-1 ">
              <div className="flex flex-col justify-center items-center">
                <h3 className="font-bold text-2xl lg:text-4xl mb-8">
                  My Recent Projects
                </h3>
                <div className="w-full max-w-md mx-auto rounded-full border border-slate-500/20 bg-black/5 overflow-x-scroll shadow-inner ">
                  <section className="w-max flex justify-start">
                    <ProjectButton
                      onClick={onButtonClick}
                      buttonFor="Web Service"
                    />
                    <ProjectButton
                      onClick={onButtonClick}
                      buttonFor="Software Packages"
                    />
                    <ProjectButton
                      onClick={onButtonClick}
                      buttonFor="Web Documentations"
                    />
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
                {!categoryChosen && <InitialParagraph />}
                {categoryChosen && (
                  <div className="w-full mt-12 relative border">
                    <ProjectTitle title={category} />
                    <ProjectContainer containerFor={category}>
                      {category === 'web service' ? (
                        <WebServices />
                      ) : category === 'software packages' ? (
                        <SoftwarePackages />
                      ) : category === 'web documentations' ? (
                        <WebDocumentations />
                      ) : (
                        <></>
                      )}
                    </ProjectContainer>
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
