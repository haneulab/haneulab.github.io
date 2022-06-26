/**
 * react
 */
import React, { useEffect, useState } from 'react';
/**
 * next
 */
import { useRouter } from 'next/router';
import Link from 'next/link';
/**
 * lib
 */
import reactClassname from '@/libs/reactClassname';
/**
 * icons
 */
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { TiBusinessCard } from 'react-icons/ti';
/**
 * local interfaces & types
 */
interface RouteData {
  href: string;
  textContent: string;
}
type RouteDataSetType = Array<RouteData>;
const Routes: RouteDataSetType = [
  { href: '/', textContent: 'home' },
  { href: '/about', textContent: 'about' },
  { href: '/projects', textContent: 'projects' },
  { href: '/contact', textContent: 'contact' },
];

const Header: React.FC = () => {
  const router = useRouter();
  const [asideOpen, setAsideOpen] = useState<boolean>(false);
  const onClickAsideToggle = () => {
    setAsideOpen((cur) => !cur);
  };
  const [scrollPosition, setSrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setSrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <React.Fragment>
      <aside
        className={reactClassname(
          'transition-all transform ease-in fixed top-0 h-screen bg-white/90',
          asideOpen
            ? 'translate-x-0 opacity-100 w-full z-30'
            : '-translate-x-full opacity-0 w-0 -z-30',
        )}
      />
      <aside
        className={reactClassname(
          'w-full fixed h-screen top-0 flex md:hidden flex-col justify-center transition-all transform ease-in',
          asideOpen
            ? ' opacity-100 bg-white z-40 translate-x-0 ease-in'
            : '-z-40 opacity-0 bg-transparent -translate-x-full ease-in',
        )}
      >
        <section className="p-8">
          <h3 className="font-light text-2xl pb-2 border-b-2 text-gray-500 mb-4">
            HaneuLab |{' '}
            {router.pathname.replace('/', '')
              ? router.pathname.replace('/', '')
              : 'Home'}
          </h3>
          <ul className="flex flex-col space-y-4">
            {Routes.map((eachRoute, routeIndex) => (
              <Link key={routeIndex} href={eachRoute.href}>
                <a
                  className={reactClassname(
                    'font-normal text-xl capitalize transition-all',
                    router.pathname === eachRoute.href
                      ? 'text-gray-800 pl-2 border-l-4 border-gray-600'
                      : 'text-gray-400 pl-0 border-l-0',
                  )}
                >
                  {eachRoute.textContent}
                </a>
              </Link>
            ))}
          </ul>
          <ul className="mt-8 pt-4 border-t-2 flex items-center space-x-4 text-gray-700">
            <li>
              <a
                href="https://github.com/haneulab"
                className="text-3xl md:text-4xl"
              >
                <BsGithub />
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/haneulab"
                className="text-3xl md:text-4xl"
              >
                <BsLinkedin />
              </a>
            </li>
          </ul>
        </section>
      </aside>
      <header
        className={reactClassname(
          'fixed z-50 bg-white/90 top-0 w-full lg:shadow-none lg:grid lg:grid-cols-10 transition-all border-b',
          asideOpen ? ' border-gray-200 shadow-none' : 'border-transparent',
          scrollPosition > 50 && asideOpen
            ? 'shadow-none'
            : scrollPosition > 50
            ? 'shadow-md'
            : '',
        )}
      >
        <section
          className={reactClassname(
            'px-8 md:px-16 lg:px-24 w-full lg:col-span-10 flex justify-between lg:space-x-8 items-center transition-all',
            scrollPosition > 50 ? 'py-4' : ' py-6',
          )}
        >
          <h1>
            <Link href="/">
              <a
                className={reactClassname(
                  'font-medium transition-all flex items-center relative transform',
                  asideOpen ? 'rotate-[360deg]' : 'rotate-0',
                  scrollPosition > 50
                    ? 'text-2xl md:text-3xl lg:text-4xl'
                    : 'text-3xl md:text-4xl lg:text-5xl',
                )}
              >
                <span
                  className={reactClassname(
                    'transition-all z-20',
                    asideOpen ? 'text-gray-400' : 'text-gray-700',
                  )}
                >
                  H
                </span>
                <span
                  className={reactClassname(
                    'transition-all z-20',
                    asideOpen ? 'text-gray-400' : 'text-gray-700',
                  )}
                >
                  L
                </span>
                <span
                  className={reactClassname(
                    'transition-all z-20',
                    asideOpen ? 'text-gray-400' : 'text-gray-700',
                  )}
                >
                  .
                </span>
              </a>
            </Link>
          </h1>
          <nav className="relative flex md:hidden items-center justify-center space-x-4">
            <Link href={router.pathname.includes('inquiry') ? '/' : '/inquiry'}>
              <a className="text-base px-4 py-2 border border-amber-500 text-amber-500">
                {router.pathname.includes('inquiry') ? 'Home' : 'Inquiry'}
              </a>
            </Link>
            <button
              onClick={onClickAsideToggle}
              className={reactClassname(
                'flex flex-col transition-all relative py-2',
              )}
            >
              <span
                className={reactClassname(
                  'absolute w-10 transform transition-all h-0.5',
                  asideOpen
                    ? ' rotate-45  rounded-full bg-gray-500'
                    : ' rotate-180 top-0   rounded-none bg-gray-400',
                )}
              />
              <span
                className={reactClassname(
                  'w-10 h-0.5 bg-gray-400 transition-all',
                  asideOpen ? 'opacity-0' : 'opacity-100',
                )}
              />
              <span
                className={reactClassname(
                  'absolute transform transition-all w-10 h-0.5',
                  asideOpen
                    ? '-rotate-45 rounded-full bg-gray-500'
                    : '-rotate-180 bottom-0 rounded-none bg-gray-400',
                )}
              />
            </button>
          </nav>
          <nav className="hidden md:flex items-center justify-center space-x-4 lg:space-x-6">
            <ul className="flex items-center justify-center space-x-4 lg:space-x-6">
              {Routes.map((eachRoute, routeIndex) => (
                <Link href={eachRoute.href} key={routeIndex}>
                  <a className="capitalize lg:text-lg xl:text-xl transition-all hover hover:text-gray-400">
                    {eachRoute.textContent}
                  </a>
                </Link>
              ))}
            </ul>
            <Link
              href={
                router.pathname.includes('inquiry') ? '/projects' : '/inquiry'
              }
            >
              <a className="px-3 py-2 rounded-full border font-normal hover text-amber-500 border-amber-500 hover:text-black/80 hover:border-black/80 transition-all flex items-center space-x-2">
                <TiBusinessCard />
                <span>
                  {router.pathname.includes('inquiry')
                    ? 'Projects'
                    : 'Business Inquries'}
                </span>
              </a>
            </Link>
          </nav>
        </section>
      </header>
    </React.Fragment>
  );
};
export default Header;
