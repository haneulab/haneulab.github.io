import { ThemeContext } from 'contexts/ThemeContext';
import classJoin from 'helpers/classJoin';
import { ThemeBarProps } from 'interfaces/customs';
import React, { useContext } from 'react';
import { BsLightbulbFill } from 'react-icons/bs';
const ThemeBar: React.FC<ThemeBarProps> = ({ setTheme }) => {
  const themeCtx = useContext(ThemeContext);
  const onThemeBarButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
    const theme = event.currentTarget.dataset.type as 'light' | 'dark';
    setTheme(theme);
  };
  return (
    <div>
      <section>
        <button
          className="flex items-center justify-center"
          onClick={onThemeBarButtonClick}
          data-type={themeCtx === 'dark' ? 'light' : 'dark'}
        >
          <BsLightbulbFill
            className={classJoin(
              'text-3xl font-bold transition-all transform rota',
              themeCtx === 'dark' ? 'text-yellow-500/90' : 'text-black/90',
            )}
          />
        </button>
      </section>
    </div>
  );
};

export default ThemeBar;
