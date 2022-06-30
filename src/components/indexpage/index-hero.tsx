/**
 * components
 */
import Link from 'next/link';
/**
 * icons
 */
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';

const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-[70vh] flex flex-col justify-center items-center">
      <section className="px-8 md:px-16 lg:px-24 text-gray-500">
        <h2 className=" text-5xl md:text-6xl lg:text-7xl mb-2 text-center">
          HaneuLab
        </h2>
        <h4 className="font-normal flex flex-col mb-4 text-center">
          <span className="text-xl md:text-2xl lg:text-3xl">
            Software Developer
          </span>
          <span className="text-lg md:text-xl lg:text-2xl">
            Based in California,
          </span>
        </h4>
        <p className="font-light text-gray-400 text-xl lg:text-2xl text-center">
          Freelancer & Project Developer
        </p>
        <div className="mt-8 w-max mx-auto">
          <Link href="/projects">
            <a className="w-max px-8 pb-4 border-b-2 text-lg font-medium lg:text-xl border-amber-500 text-amber-500 transition-all hover hover:border-amber-300 hover:text-amber-400 flex items-center space-x-4">
              <span>View My Projects</span>
              <AiOutlineFundProjectionScreen className="text-2xl" />
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Hero;
