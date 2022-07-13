import Link from 'next/link';
import React from 'react';
import { reactClassNames } from '@motioned-official/react-functions';
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
        </ul>
      </section>
    </nav>
  );
};

export default MobileNavigation;
