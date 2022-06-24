import reactClassname from '@/libs/reactClassname';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

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
  return (
    <React.Fragment>
      <aside
        className={reactClassname(
          'w-full fixed h-screen top-0 flex flex-col justify-center transition-all ease-in',
          asideOpen
            ? ' opacity-100 bg-white z-40'
            : '-z-40 opacity-0 bg-transparent',
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
                    router.pathname.includes(eachRoute.href)
                      ? 'text-gray-800 pl-2 border-l-4 border-gray-600'
                      : 'text-gray-400 pl-0 border-l-0',
                  )}
                >
                  {eachRoute.textContent}
                </a>
              </Link>
            ))}
          </ul>
          <ul className="mt-8 pt-4 border-t-2 flex items-center space-x-4">
            <li>
              <a className="font-medium text-lg px-3 py-2 border-2 border-gray-200 text-gray-400">
                Github
              </a>
            </li>
            <li>
              <a className="font-medium text-lg px-3 py-2 border-2 border-gray-200 text-gray-400">
                Linkedin
              </a>
            </li>
          </ul>
        </section>
      </aside>
      <header className="fixed z-50 top-0 w-full bg-white border-b border-gray-200">
        <section className="px-8 py-6 md:py-3 md:px-16 lg:px-24 flex justify-between items-center">
          <h1>
            <Link href="/">
              <a
                className={reactClassname(
                  'font-medium text-3xl transition-all',
                  asideOpen ? 'text-gray-400' : '',
                )}
              >
                HaneuLab
              </a>
            </Link>
          </h1>
          <nav className="relative flex md:hidden items-center justify-center space-x-4">
            <button className="text-base px-4 py-2 border border-gray-400 text-gray-400">
              <span>Inquiry</span>
            </button>
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
        </section>
      </header>
    </React.Fragment>
  );
};
export default Header;
