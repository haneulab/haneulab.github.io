import MobileMenuClick from 'components/MobileMenuClick';
import { HeaderProps } from 'interfaces/layouts';
import Link from 'next/link';

const Header: React.FC<HeaderProps> = ({ ThemeBarComponent }) => {
  return (
    <header className="w-full fixed top-0 z-40 backdrop-blur-sm bg-black/0">
      <section className="flex items-center justify-between p-8">
        <h1 className="w-full">
          <Link href={'/'}>
            <a className="font-bold text-2xl">HaneuLab</a>
          </Link>
        </h1>
        {ThemeBarComponent}
        <MobileMenuClick />
      </section>
    </header>
  );
};
export default Header;
