/* eslint-disable @next/next/no-img-element */
/**
 * next
 */
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-6 lg:px-24">
      <section className="w-full pt-28 lg:pt-0 lg:col-span-2 flex flex-col h-full items-center justify-center">
        <img
          src="haneulab_image_3.png"
          alt="Haneul Choi Smiley Image"
          className="w-full max-w-lg opacity-50"
        />
      </section>
      <section className="p-8 pb-32 md:px-16 lg:px-24 lg:pb-0 lg:col-span-4 w-full h-full lg:flex flex-col justify-center items-center">
        <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl mb-4  md:mb-6 lg:mb-8">
          About Haneul Choi
        </h2>
        <p className="leading-7 lg:leading-8 text-lg lg:text-xl flex flex-col space-y-4 max-w-3xl mb-8 md:mb-12 lg:mb-16 lg:text-center">
          <span>
            I&apos;m a software developer who builds web applications & web
            documentations.
          </span>
          <span>
            I also do freelancing web design & development for small businesses
            as a contract developer. For any business-related inquiry, you can
            go to{' '}
            <Link href="/inquiry">
              <a className="text-amber-500 underline">inquiry page.</a>
            </Link>
          </span>
        </p>
        <p className="font-light text-lg md:text-xl lg:text-2xl border-b pb-1 text-gray-500">
          Below is the list of useful page links.
        </p>
        <ul className="py-4 flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 mb-4">
          <Link href="/projects">
            <a className="w-full md:w-56 text-center px-8 py-3 rounded-full bg-transparent text-amber-500 border border-amber-500 font-medium transition-all md:hover hover:bg-amber-500 hover:text-white">
              Projects
            </a>
          </Link>
          <Link href="/photos">
            <a className="w-full md:w-56 text-center px-8 py-3 rounded-full bg-transparent text-amber-500 border border-amber-500 font-medium transition-all md:hover hover:bg-amber-500 hover:text-white">
              Photos
            </a>
          </Link>
        </ul>
        <p className="font-light text-lg md:text-xl lg:text-2xl border-b pb-1 text-gray-500">
          Below is the list of useful external links.
        </p>
        <ul className="py-4 flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
          <a className="w-full md:w-56 text-center px-8 py-3 rounded-full bg-blue-600 text-white font-medium transition-all hover hover:opacity-70">
            Linkedin
          </a>
          <a
            href="https://github.com/haneulab"
            className="w-full md:w-56 text-center px-8 py-3 rounded-full bg-black/80 text-white font-medium transition-all hover hover:opacity-70"
          >
            Github
          </a>
        </ul>
      </section>
    </div>
  );
};
export default Hero;
