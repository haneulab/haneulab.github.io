import Link from 'next/link';
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

const DesktopNavigation: React.FC = () => {
  return (
    <nav className="hidden lg:flex items-center">
      <ul className="flex items-center space-x-4 xl:space-x-6">
        {routes.map((route, index) => (
          <li key={index}>
            <Link href={route.href}>
              <a className="font-medium text-lg capitalize transition-all hover hover:opacity-50 ease-in">
                {route.text}
              </a>
            </Link>
          </li>
        ))}
        <li className="flex items-center space-x-2">
          <a
            href="#"
            className="flex items-center space-x-2 px-3 py-2 rounded-xl bg-dark-blue/5 text-xs transition-all hover:bg-dark-blue/50 text-dark-blue hover:text-dark-light border hover:border-transparent border-dark-blue/50"
          >
            <span>Resume</span>
            <BsFileEarmarkPdf />
          </a>
          <a
            href="#"
            className="flex items-center space-x-2 px-3 py-2 rounded-xl bg-dark-blue/5 text-xs transition-all hover:bg-dark-blue/50 text-dark-blue hover:text-dark-light border hover:border-transparent border-dark-blue/50"
          >
            <span>Inquiry</span>
            <BsChatDots />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopNavigation;
