import { ThemeContext } from 'contexts/ThemeContext';
import classJoin from 'helpers/classJoin';
import { ThemeBarProps } from 'interfaces/customs';
import React, { useContext } from 'react';
const ThemeBar: React.FC<ThemeBarProps> = ({ setTheme }) => {
  const theme = useContext(ThemeContext);
  const onThemeBarButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
    const themeValue = event.currentTarget.dataset.type as 'light' | 'dark';
    setTheme(themeValue);
  };
  return (
    <div className="w-full flex justify-end">
      <section>
        <button
          className={classJoin(
            'flex items-center p-1 bg-slate-200 w-16 h-8 overflow-hidden rounded-3xl transition-all shadow-2xl shadow-black ring-2',
            theme === 'dark'
              ? 'justify-start'
              : theme === 'light'
              ? 'justify-end'
              : '',
          )}
          onClick={onThemeBarButtonClick}
          data-type={theme === 'dark' ? 'light' : 'dark'}
        >
          <span
            className={classJoin(
              'w-6 h-6 rounded-full bg-gradient-to-r animate-spin hover hover:animate-pulse hover:transform hover:scale-125',
              theme === 'dark'
                ? 'from-yellow-400 to-orange-400'
                : theme === 'light'
                ? 'from-black/90 to-slate-500'
                : '',
            )}
          />
        </button>
      </section>
    </div>
  );
};

export default ThemeBar;
