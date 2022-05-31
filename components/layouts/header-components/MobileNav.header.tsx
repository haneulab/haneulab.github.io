import { Theme } from '@components/contexts/Theme';
import { cls } from '@libs/index.helper';
import React, { useContext, useState } from 'react';
import MobileNavToggler from './MobileNavToggler.header';

const MobileNav: React.FC = () => {
  const theme = useContext(Theme);
  const [navToggle, setNavToggle] = useState<boolean>(false);
  const onClickMobileToggle = () => {
    setNavToggle((cur) => !cur);
  };
  return (
    <React.Fragment>
      <MobileNavToggler
        className={cls(
          'fixed w-full flex h-screen backdrop-blur-md z-50 left-0 top-0 flex flex-col justify-center items-center transition-all transform',
          navToggle ? 'translate-x-0 ' : '-translate-x-full',
          theme === 'dark' ? 'bg-black/90' : 'bg-white/90',
        )}
        onClickMobileToggle={onClickMobileToggle}
      />
      <nav className={cls('mobile-nav md:hidden transition-all')}>
        <button onClick={onClickMobileToggle} className="flex flex-col">
          <span
            className={cls(
              'w-10 h-2 rounded-full transition-all transform',
              theme === 'dark'
                ? 'bg-slate-500 rotate-180'
                : 'bg-slate-500 -rotate-180',
              navToggle ? 'w-0' : 'w-10',
            )}
          />
          <span
            className={cls(
              ' h-2 rounded-full transition-all transform my-1 ',
              theme === 'dark'
                ? 'w-10 bg-slate-400 rotate-180 self-end'
                : 'w-10 bg-slate-600 rotate-180',
              navToggle ? 'w-0' : 'w-6',
            )}
          />
          <span
            className={cls(
              'w-10 h-2 rounded-full transition-all transform',
              theme === 'dark'
                ? 'bg-slate-300 rotate-0'
                : 'bg-slate-700 rotate-180',
              navToggle ? 'w-0' : 'w-10',
            )}
          />
        </button>
      </nav>
    </React.Fragment>
  );
};

export default MobileNav;
