import Link from 'next/link';

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
      </ul>
    </nav>
  );
};

export default DesktopNavigation;
