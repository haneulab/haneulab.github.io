import type { NextPage } from 'next';
import { Section, Wrap, Content } from '@motioned-official/react-components';
import React from 'react';
import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs';
import SEO from 'src/components/reusable/SEO';
import MyProfileImage from 'public/images/Haneul_Choi.png';
import SoccerImage from 'public/images/Soccer_Image.png';
import TravelImage from 'public/images/Travel_Image.png';
import CookingImage from 'public/images/Cooking_Image.png';
import Image from 'next/image';
import AboutSectionTitle from 'src/components/reusable/AboutSectionTitle';
import ExternalLink from 'src/components/reusable/ExternalLink';
import HobbyCard from 'src/components/reusable/HobbyCard';
import TitleBubble from 'src/components/reusable/TitleBubble';

const About: NextPage = () => {
  return (
    <React.Fragment>
      <SEO />
      <Section className="min-h-screen flex flex-col justify-start items-center bg-dark-primary relative">
        <Wrap className="w-full">
          <>
            <section className="w-full h-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-6 lg:grid-cols-10 gap-8 relative">
              <Content
                displayType="block"
                className="w-full h-screen flex flex-col justify-center p-8 col-span-1 md:col-span-2 lg:col-span-3 lg:sticky lg:top-0 lg:pl-4 lg:pr-14 py-32"
              >
                <>
                  <div className="w-full max-w-xs mx-auto mb-8">
                    <Image
                      src={MyProfileImage}
                      alt="Haneul Choi Logo"
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <ul className="font-mono flex flex-col space-y-4">
                      <a
                        href="https://github.com/haneulab"
                        className="flex justify-between items-center space-x-4 px-5 py-3 rounded-full border border-gray-600 shadow-md transition-all lg:hover:border-gray-300 text-gray-300"
                      >
                        <BsGithub />
                        <span>@ Source Codes</span>
                      </a>
                      <a
                        href="https://linkedin.com/in/haneulab"
                        className="flex justify-between items-center space-x-4 px-5 py-3 rounded-full border border-blue-600 shadow-md transition-all lg:hover:border-blue-300 text-blue-300"
                      >
                        <BsLinkedin />
                        <span>@ E-Profile</span>
                      </a>
                      <a
                        href="https://instagram.com/__sky__e"
                        className="flex justify-between items-center space-x-4 px-5 py-3 rounded-full border border-pink-600 shadow-md transition-all lg:hover:border-pink-300 text-pink-300"
                      >
                        <BsInstagram />
                        <span>@ Social Life</span>
                      </a>
                    </ul>
                  </div>
                </>
              </Content>
              <Content
                displayType="block"
                className="w-full col-span-1 md:col-span-4 lg:col-span-7  px-8 lg:px-14 py-32"
              >
                <>
                  <div className="min-h-screen">
                    <AboutSectionTitle title="Brief About Me" />
                    <p className="text-lg leading-8 mb-8">
                      Hello everyone, my name is Haneul Choi. It is pronounced
                      smilarly to &apos;ha-nool&apos; & &apos;cho-e&apos;. Or
                      you can call me <strong>Sky</strong> because that is what
                      it means in Korean.
                      <br />
                      <br />
                      I am from South Korea, and I came to the states in 2011. I
                      can speak Korean and English fluently.
                      <br />
                      <br />I am a software developer. I have been working on
                      side projects & client projects from my freelancing
                      business{' '}
                      <a
                        href="https://motioned.tech"
                        className="text-dark-blue"
                      >
                        Motioned,
                      </a>{' '}
                      where I build web applications using{' '}
                      <span className="text-dark-blue">
                        my favorite dev stacks.
                      </span>
                    </p>
                    <div className="relative">
                      <h4 className="relative top-5 -mt-5 left-4 z-10 border border-dark-blue bg-dark-blue rounded-full shadow-md w-max px-4 py-2">
                        Development Stacks
                      </h4>
                      <ul className="relative z-0 p-8 bg-dark-primary border border-dark-blue flex flex-col items-center space-y-2 rounded-xl shadow-xl">
                        <li>
                          <code>NextJS</code>
                        </li>
                        <li>
                          <code>TailwindCSS</code>
                        </li>
                        <li>
                          <code>TypeScript</code>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="w-full min-h-screen py-28 px-8 lg:px-14">
                    <AboutSectionTitle title="Hobbies & Gallery" />
                    <ul className="w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8 lg:mt-12">
                      <article className="w-full h-full relative bg-gradient-to-b from-transparent via-transparent to-dark-blue/20">
                        <div className="absolute z-10 -top-2 lg:-top-4 left-1/2 transform -translate-x-1/2 flex items-center justify-between w-full">
                          {'Hobbies'.split('').map((eachLetter, index) => (
                            <TitleBubble textContent={eachLetter} key={index} />
                          ))}
                        </div>
                        <ul className="relative w-full h-full z-0 backdrop-blur-sm p-8 text-dark-light">
                          <HobbyCard
                            image={{
                              href: SoccerImage,
                              alt: 'Soccer Image',
                            }}
                            title="Playing Soccer"
                          />
                          <HobbyCard
                            image={{
                              href: TravelImage,
                              alt: 'Travel Image',
                            }}
                            title="Travelling"
                            flexReverse
                          />
                          <HobbyCard
                            image={{
                              href: CookingImage,
                              alt: 'Cooking Image',
                            }}
                            title="Cooking"
                          />
                        </ul>
                      </article>
                      <article className="w-full h-full flex flex-col justify-center items-center relative bg-gradient-to-b from-transparent via-transparent to-dark-blue/20">
                        <div className="absolute z-10 -top-2 lg:-top-4 left-1/2 transform -translate-x-1/2 flex items-center justify-between w-full">
                          {'Gallery'.split('').map((eachLetter, index) => (
                            <TitleBubble textContent={eachLetter} key={index} />
                          ))}
                        </div>
                        <p className="p-8 text-dark-blue/50">
                          Gallery is under construction
                        </p>
                      </article>
                    </ul>
                  </div>
                  <div className="w-full py-28 px-8 lg:px-14 flex flex-col items-center lg:items-start">
                    <AboutSectionTitle title="# Useful Links" />
                    <ul className="flex flex-col items-center lg:items-start space-y-4">
                      <ExternalLink
                        href="https://github.com/haneulab"
                        textContent="Source Code Repositories"
                      />
                    </ul>
                  </div>
                </>
              </Content>
            </section>
          </>
        </Wrap>
      </Section>
    </React.Fragment>
  );
};
export default About;
