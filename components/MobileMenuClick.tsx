import { ThemeContext } from 'contexts/ThemeContext';
import classJoin from 'helpers/classJoin';
import { useContext } from 'react';

const MobileMenuClick: React.FC = () => {
  const theme = useContext(ThemeContext);
  return (
    <nav className="pl-4 lg:hidden">
      <button className="flex flex-col">
        <span
          className={classJoin(
            'transition-all rounded-full shadow-md',
            theme === 'dark'
              ? 'w-8 h-1 bg-slate-100/80'
              : theme === 'light'
              ? 'w-8 h-1 bg-slate-900/80'
              : '',
          )}
        />
        <span
          className={classJoin(
            'transition-all rounded-full my-1.5 shadow-md',
            theme === 'dark'
              ? 'w-8 h-1 bg-slate-100/80'
              : theme === 'light'
              ? 'w-8 h-1 bg-slate-900/80'
              : '',
          )}
        />{' '}
        <span
          className={classJoin(
            'transition-all rounded-full shadow-md',
            theme === 'dark'
              ? 'w-8 h-1 bg-slate-100/80'
              : theme === 'light'
              ? 'w-8 h-1 bg-slate-900/80'
              : '',
          )}
        />
      </button>
    </nav>
  );
};
export default MobileMenuClick;
