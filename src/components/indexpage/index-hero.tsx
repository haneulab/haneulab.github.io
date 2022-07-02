/**
 * components
 */

import Transition from '@/reuse/transition.reuse';
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';

const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-screen flex flex-col justify-center items-center">
      <section className="px-8 md:px-16 lg:px-24 text-stone-500">
        <Transition id="index-hero" className="">
          <>
            <h2 className=" text-5xl md:text-6xl lg:text-7xl mb-2 lg:mb-4 text-center">
              Haneul Choi
            </h2>
            <ul className="flex flex-col mb-8">
              <li className="flex items-center justify-center space-x-2 md:text-lg lg:text-xl xl:text-2xl">
                <span className="text-stone-400">Founder & Lead Developer</span>{' '}
                <a
                  href="https://motioned.tech"
                  className="font-medium text-blue-500 transition-all hover lg:hover:text-blue-400"
                >
                  @ Motioned
                </a>
              </li>
              <li className="flex items-center justify-center space-x-2 md:text-lg lg:text-xl xl:text-2xl">
                <span className="text-stone-400">Web Developer</span>{' '}
                <a
                  href="https://gdsc.community.dev/university-of-california-davis/"
                  className="font-medium text-blue-500 transition-all hover lg:hover:text-blue-400"
                >
                  @ Google DSC UCD
                </a>
              </li>
            </ul>
            <ul className="flex items-center space-x-4 justify-center">
              <a
                className="transition-all text-2xl lg:text-3xl lg:hover:text-blue-500 lg:hover:rotate-12"
                href="https://linkedin.com/in/haneulab"
              >
                <BsLinkedin />
              </a>
              <a
                className="transition-all text-2xl lg:text-3xl lg:hover:text-black/80 lg:hover:rotate-12"
                href="https://github.com/haneulab"
              >
                <BsGithub />
              </a>
              <a
                className="transition-all text-2xl lg:text-3xl lg:hover:text-pink-500 lg:hover:rotate-12"
                href="https://instagram.com/__sky__e"
              >
                <BsInstagram />
              </a>
            </ul>
          </>
        </Transition>
      </section>
    </div>
  );
};

export default Hero;
