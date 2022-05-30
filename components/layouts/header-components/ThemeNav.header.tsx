import type { ThemeNavComponentType } from '@components/app.interface';
import { Theme } from '@components/contexts/Theme';
import { cls } from '@libs/index.helper';
import React, { useContext } from 'react';

const ThemeNav: ThemeNavComponentType = ({ setTheme }) => {
  const theme = useContext(Theme);
  const onClickThemeChange = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    switch (e.currentTarget.dataset[theme]) {
      case 'dark':
        setTheme('light');
        break;
      case 'light':
        setTheme('dark');
        break;
      default:
        setTheme((cur) => cur);
        break;
    }

    e.currentTarget.dataset[theme] = theme;
  };
  return (
    <nav
      className={cls(
        'theme-nav rounded-full backdrop-blur-sm border-2 transition-all',
        theme === 'dark'
          ? 'border-slate-800  text-cyan-200'
          : 'border-cyan-200 text-cyan-400   ',
      )}
    >
      <section>
        <button
          onClick={(e) => onClickThemeChange(e)}
          data-theme={theme}
          className={cls('font-semibold w-full h-full px-3 py-2')}
        >
          {theme.toUpperCase()}
        </button>
      </section>
    </nav>
  );
};

export default ThemeNav;
