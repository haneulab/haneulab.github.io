import { THEME, Theme } from '@components/contexts/Theme';
import { cls } from '@libs/index.helper';
import { useContext } from 'react';

const Footer: React.FC = () => {
  const theme = useContext(Theme);
  return (
    <footer
      className={cls(
        'w-full transition-all backdrop-blur-sm',
        THEME.container[theme].bg,
        THEME.container[theme].text,
      )}
    >
      <section className="px-8 py-16 flex flex-col justify-center items-center">
        <div className="flex items-center space-x-2">
          <h3 className="font-bold text-xl lg:text-3xl text-center mb-1">
            HaneuLab
          </h3>
          <p
            className={cls(
              'text-xs lg:text-lg transition-all font-medium',
              theme === 'dark' ? 'text-slate-300' : 'text-slate-600',
            )}
          >
            2022 &copy; All rights reserved.
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
