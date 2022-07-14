import Link from 'next/link';
import React from 'react';
import { reactClassNames } from '@motioned-official/react-functions';
import { BsChatDots, BsFileEarmarkPdf } from 'react-icons/bs';
interface RouteObject {
  href: string;
  text: string;
}

const routes: RouteObject[] = [
  { href: '/about', text: 'about' },
  { href: '/projects', text: 'projects' },
  { href: '/contact', text: 'contact' },
];

interface MobileNavigationProps {
  mobileToggleNavView: boolean;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({
  mobileToggleNavView,
}) => {
  return (
    <nav
      className={reactClassNames(
        'absolute top-16 right-0 w-max flex flex-col lg:hidden transition-all',
        mobileToggleNavView
          ? 'h-max opacity-100 translate-y-0 bg-dark-secondary'
          : '-translate-y-full opacity-0 overflow-hidden bg-dark-primary',
      )}
    >
      <section className="p-8">
        <ul className="flex flex-col space-y-4">
          {routes.map((route, index) => (
            <li key={index}>
              <Link href={route.href}>
                <a className="font-medium text-lg capitalize">{route.text}</a>
              </Link>
            </li>
          ))}
          <li className="flex flex-col items-center space-y-4">
            <a
              href="#"
              className="w-full flex items-center justify-between space-x-2 pl-3 text-xs transition-all border-l-4 border-dark-blue/50 text-dark-blue"
            >
              <span>Resume</span>
              <BsFileEarmarkPdf />
            </a>
            <a
              href="#"
              className="w-full flex items-center justify-between space-x-2 pl-3 text-xs transition-all border-l-4 border-dark-blue/50 text-dark-blue"
            >
              <span>Inquiry</span>
              <BsChatDots />
            </a>
          </li>
        </ul>
      </section>
    </nav>
  );
};

export default MobileNavigation;
