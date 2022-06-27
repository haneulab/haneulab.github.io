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
    <div className="relative w-full h-[58vh] flex flex-col justify-center">
      <section className="p-8 md:p-16 lg:px-24">
        <h2 className="font-normal text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          HaneuLab
        </h2>
        <h4 className="font-normal text-gray-500 flex flex-col">
          <span className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            Software Developer
          </span>
          <span className="text-lg md:text-xl lg:text-2xl">
            Based in California,
          </span>
        </h4>
        <p className="font-light text-gray-400 text-xl lg:text-2xl">
          Freelancer & Project Developer
        </p>
        <div className="mt-8">
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
