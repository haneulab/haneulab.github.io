import { Section, Wrap } from '@motioned-official/react-components';
import type { GetServerSidePropsContext, NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import SEO from 'src/components/reusable/SEO';
import works, { WorkDataInterface } from 'src/data/works';
import { AiOutlineFundView } from 'react-icons/ai';
const ProjectDetail: NextPage<{ data: WorkDataInterface }> = ({ data }) => {
  return (
    <React.Fragment>
      <SEO />
      <Section className="w-full min-h-screen flex flex-col justify-center relative">
        <Wrap className="px-8 py-32 max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12">
          <>
            <div className="col-span-1 lg:col-span-5 w-full h-full flex flex-col items-center">
              <div className="mb-8">
                <span className="flex items-center space-x-2 capitalize">
                  <span className="font-roboto text-dark-blue">
                    {data.type}
                  </span>
                </span>
                <h2 className="font-bold text-4xl font-roboto capitalize">
                  <span className="text-dark-blue text-center">
                    {data.title}
                  </span>{' '}
                  Project
                </h2>
              </div>
              <div className="px-6 w-full flex flex-col items-center space-y-4 mb-4 lg:mb-0">
                <a
                  href={data.links?.README}
                  className="w-full sm:max-w-[250px] text-center mx-auto font-roboto font-medium bg-gradient-to-r from-orange-500 to-amber-500 text-dark-light px-5 py-2 rounded-full transition-all lg:hover:from-orange-400 lg:hover:to-amber-400 lg:hover:text-dark-primary"
                >
                  Project Source Code
                </a>
                <a
                  href={data.links?.html_url}
                  className="w-full sm:max-w-[250px] text-center mx-auto font-roboto font-medium bg-gradient-to-r from-orange-500 to-amber-500 text-dark-light px-5 py-2 rounded-full transition-all lg:hover:from-orange-400 lg:hover:to-amber-400 lg:hover:text-dark-primary"
                >
                  Live Demo
                </a>
              </div>
            </div>
            <div className="w-full relative h-full bg-gradient-to-b from-dark-primary via-dark-secondary to-dark-blue col-span-1 lg:col-span-7 rounded-b-xl shadow-md">
              <span className="absolute text-lg lg:text-xl -top-3 left-6 text-dark-blue font-roboto font-medium">
                Description
              </span>
              <section className="p-6 flex flex-col space-y-3">
                {data.description.long.map((each, index) => (
                  <p
                    key={index}
                    className="text-dark-light/90 font-roboto font-light text-sm"
                  >
                    {each}
                  </p>
                ))}
                <div className="pt-3 flex flex-col">
                  {data.links?.html_url && (
                    <a
                      className="w-max flex justify-between items-center space-x-3 px-5 py-2 rounded-xl bg-dark-secondary/50 transition-all lg:hover:bg-dark-primary/90 lg:hover:text-dark-light font-medium"
                      href={data.links?.html_url}
                    >
                      <span>Project Live Demo</span>
                      <AiOutlineFundView />
                    </a>
                  )}
                </div>
              </section>
            </div>
            <div className="w-full col-span-1 lg:col-span-12 bg-dark-secondary p-8 lg:p-12 rounded-xl shadow-md">
              <h4 className="text-center font-bold text-3xl mb-3 text-dark-blue">
                # Work With Me
              </h4>
              <p className="text-base lg:text-lg leading-7 lg:leading-8 text-center max-w-2xl mx-auto mb-6">
                Did you like the project I worked on? You can inquiry about
                working & collaborating on the project that you have in mind!
              </p>
              <div className="flex items-center justify-center">
                <Link href="/inquiry">
                  <a className="capitalize font-roboto text-sm lg:text-base pb-2 border-b px-3 text-dark-blue border-dark-blue transition-all lg:hover:text-dark-light/90 lg:hover:border-dark-light/90">
                    collaboration inquiry &rarr;
                  </a>
                </Link>
              </div>
            </div>
          </>
        </Wrap>
      </Section>
    </React.Fragment>
  );
};

export default ProjectDetail;

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const {
    query: { title },
  } = ctx;
  const data = works.find(
    (each) =>
      each.title.toLowerCase() === title?.toLocaleString().toLowerCase(),
  );
  return {
    props: {
      data,
    },
  };
};
