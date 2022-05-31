// import Link from 'next/link';
import { useRouter } from 'next/router';

const DesktopNavData = [
  { href: '/', text: 'Home' },
  { href: '/about', text: 'About Us' },
  { href: '/products', text: 'Products' },
  { href: '/stories', text: 'Stories' },
  { href: '/contact', text: 'Contact' },
];

const DesktopNav: React.FC = () => {
  const router = useRouter();
  const onClickRoute = (newRoute: string) => {
    router.push(newRoute, newRoute, { shallow: true });
  };
  return (
    <nav className="desktop-nav w-full justify-end hidden lg:flex items-center space-x-2 lg:space-x-4">
      {DesktopNavData.map((item, index) => (
        // <Link href={item.href} key={index}>
        //   <a className="transition-all text-lg px-5 py-3 rounded-full bg-transparent hover hover:bg-black/90 hover:text-white/90 hover:backdrop-sm">
        //     {item.text}
        //   </a>
        // </Link>
        <button
          key={index}
          onClick={() => onClickRoute(item.href)}
          className="transition-all text-lg p-3 rounded-full bg-transparent hover hover:bg-black/90 hover:text-white/90 hover:backdrop-sm"
        >
          {item.text}
        </button>
      ))}
    </nav>
  );
};

export default DesktopNav;
