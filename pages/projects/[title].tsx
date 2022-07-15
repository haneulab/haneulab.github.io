import { Section, Wrap } from '@motioned-official/react-components';
import type { GetServerSidePropsContext, NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import SEO from 'src/components/reusable/SEO';
import works, { WorkDataInterface } from 'src/data/works';
import { AiOutlineFundView } from 'react-icons/ai';
import { HiOutlineViewGridAdd } from 'react-icons/hi';
const ProjectDetail: NextPage<{ data: WorkDataInterface }> = ({ data }) => {
  return (
    <React.Fragment>
      <SEO />
      <Section className="w-full min-h-screen flex flex-col justify-center">
        <Wrap className="px-8 py-24 max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8">
          <>
            <div className="col-span-1 lg:col-span-5 w-full h-full flex flex-col items-center">
              <div className="mb-8">
                <h2 className="font-bold text-4xl font-roboto capitalize">
                  <span className="text-dark-blue text-center">
                    {data.title}
                  </span>{' '}
                  Project
                </h2>
              </div>
              <div className="px-6 flex flex-col space-y-3">
                <span className="flex items-center space-x-2 capitalize">
                  <span className="font-roboto">Project Type</span>
                  <span className="text-dark-light font-anek px-5 p-1 rounded-full shadow-md bg-dark-blue/50">
                    {data.type}
                  </span>
                </span>
                <span className="flex items-center space-x-2 capitalize">
                  <span className="font-roboto">Project Source Code</span>
                  <span className="text-dark-blue font-anek">
                    {data.links?.README ? (
                      <a
                        href={data.links.README}
                        className="underline font-medium transition-all lg:hover:text-dark-blue/75"
                      >
                        here
                      </a>
                    ) : (
                      <span>No source code</span>
                    )}
                  </span>
                </span>
                <span className="flex items-center space-x-2 capitalize">
                  <span className="font-roboto">Project Demo</span>
                  <span className="text-dark-blue font-anek">
                    {data.links?.html_url ? (
                      <a
                        href={data.links.html_url}
                        className="underline font-medium transition-all lg:hover:text-dark-blue/75"
                      >
                        here
                      </a>
                    ) : (
                      <span>No demo view</span>
                    )}
                  </span>
                </span>
                <span className="flex items-center space-x-2 capitalize">
                  <span className="font-roboto">Project Progression</span>
                  <span className="text-dark-blue font-anek">
                    <span>
                      {data.progress === 'complete' ? 'complete' : 'ongoing'}
                    </span>
                  </span>
                </span>
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
                <div className="pt-3 flex flex-col lg:flex-row item-center space-y-3 lg:space-y-0 lg:space-x-3">
                  {data.links?.html_url && (
                    <a
                      className="flex justify-between items-center space-x-3 px-5 py-2 rounded-xl bg-dark-secondary/50 transition-all lg:hover:bg-dark-primary/90 lg:hover:text-dark-light font-medium"
                      href={data.links?.html_url}
                    >
                      <span>Projet Landing Page</span>
                      <AiOutlineFundView />
                    </a>
                  )}
                  <Link href={'/projects'}>
                    <a className="flex justify-between items-center space-x-3 px-5 py-2 rounded-xl bg-dark-secondary/50 transition-all lg:hover:bg-dark-primary/90 lg:hover:text-dark-light font-medium">
                      <span>Browse All Projects</span>
                      <HiOutlineViewGridAdd />
                    </a>
                  </Link>
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
