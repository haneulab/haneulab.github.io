/* eslint-disable @next/next/no-img-element */
/**
 * next
 */
import Transition from '@/reuse/transition.reuse';
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:px-24">
      <Transition id="about-hero" className="pt-24">
        <section className="w-full sm:max-w-sm mx-auto flex flex-col h-full items-center justify-center">
          <img
            src="haneulab_image_3.png"
            alt="Haneul Choi Smiley Image"
            className="w-full max-w-lg opacity-50"
          />
        </section>
      </Transition>
      <Transition id="about-text" className="">
        <section className="p-8 md:px-16 lg:px-24 lg:pb-0 lg:col-span-4 w-full h-full lg:flex flex-col justify-center items-center">
          <h2 className="text-stone-600 font-medium text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-6 lg:mb-8">
            About Haneul Choi
          </h2>
          <p className="text-stone-400 leading-7 lg:leading-8 text-lg lg:text-xl flex flex-col space-y-4 max-w-3xl mb-8 md:mb-12 lg:mb-16 lg:text-center">
            <span>
              I&apos;m a software developer who builds web applications & web
              documentations.
            </span>
            <span>
              I also do freelancing web design & development for small
              businesses as a contract developer. For any business-related
              inquiry, you can go to{' '}
              <Link href="/inquiry">
                <a className="text-blue-500 transition-all lg:hover:text-blue-400">
                  inquiry page.
                </a>
              </Link>
            </span>
          </p>
        </section>
      </Transition>
    </div>
  );
};
export default Hero;
