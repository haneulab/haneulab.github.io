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
        scrollLeave === 'top'
          ? 'translate-y-0'
          : scrollLeave === 'middle'
          ? '-translate-y-full'
          : 'translate-y-0',
      )}
    >
      <section
        className={cls(
          'w-full flex justify-between px-8  items-center transition-all',
          scrollLeave ? 'py-3' : 'py-6 ',
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
