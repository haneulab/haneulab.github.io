import type { HeaderComponentType } from '@components/app.interface';
import DesktopNav from '@components/layouts/header-components/DesktopNav.header';
import Logo from '@components/layouts/header-components/Logo.header';
import MobileNav from '@components/layouts/header-components/MobileNav.header';
import ThemeNav from '@components/layouts/header-components/ThemeNav.header';
import { cls } from '@libs/index.helper';

const Header: HeaderComponentType = ({ setTheme, scrollLeave }) => {
  return (
    <header
      className={cls(
        'w-full fixed top-0 z-40 backdrop-blur-md transition-all transform',
      )}
    >
      <section
        className={cls(
          'w-full flex justify-between items-center transition-all',
          scrollLeave ? 'md:px-8 p-4' : 'px-8 py-6 ',
        )}
      >
        <Logo />
        <div
          className={cls(
            'lg:w-full flex items-center justify-center pr-4',
            scrollLeave ? 'space-x-2' : 'space-x-4',
          )}
        >
          <DesktopNav />
          <ThemeNav setTheme={setTheme} />
        </div>
        <MobileNav />
      </section>
    </header>
  );
};

export default Header;
