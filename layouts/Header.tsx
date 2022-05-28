import MobileMenuClick from 'components/MobileMenuClick';
import { HeaderProps } from 'interfaces/layouts';
import Link from 'next/link';

const Header: React.FC<HeaderProps> = ({ ThemeBarComponent }) => {
  return (
    <header className="w-full fixed top-0 z-40 backdrop-blur-sm bg-black/0">
      <section className="flex items-center justify-between p-8 lg:py-4">
        <h1 className="w-full">
          <Link href={'/'}>
            <a className="font-bold text-2xl">HaneuLab</a>
          </Link>
        </h1>
        <nav className="hidden lg:flex w-full justify-start items-center space-x-2 xl:space-x-4">
          <Link href={'/'}>
            <a className="font-medium text-base xl:text-lg transition-all hover hover:opacity-60">
              About Us
            </a>
          </Link>
          <Link href={'/'}>
            <a className="font-medium text-base xl:text-lg transition-all hover hover:opacity-60">
              Services
            </a>
          </Link>
          <Link href={'/'}>
            <a className="font-medium text-base xl:text-lg transition-all hover hover:opacity-60">
              Pricing
            </a>
          </Link>
          <Link href={'/'}>
            <a className="font-medium text-base xl:text-lg transition-all hover hover:opacity-60">
              Consult
            </a>
          </Link>
          <Link href={'/'}>
            <a className="font-medium text-base xl:text-lg transition-all hover hover:opacity-60">
              Contact
            </a>
          </Link>
        </nav>
        {ThemeBarComponent}
        <MobileMenuClick />
      </section>
    </header>
  );
};
export default Header;
