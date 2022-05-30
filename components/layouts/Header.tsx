import type { HeaderComponentType } from '@components/app.interface';
import DesktopNav from '@components/layouts/header-components/DesktopNav.header';
import Logo from '@components/layouts/header-components/Logo.header';
import MobileNav from '@components/layouts/header-components/MobileNav.header';
import ThemeNav from '@components/layouts/header-components/ThemeNav.header';

const Header: HeaderComponentType = ({ setTheme }) => {
  return (
    <header className="w-full fixed top-0 z-40 backdrop-blur-md">
      <section className="w-full flex justify-between items-center px-8 py-6">
        <Logo />
        <div className="flex items-center justify-center pr-4">
          <DesktopNav />
          <ThemeNav setTheme={setTheme} />
        </div>
        <MobileNav />
      </section>
    </header>
  );
};

export default Header;
