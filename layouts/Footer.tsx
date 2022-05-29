import { ThemeContext } from 'contexts/ThemeContext';
import classJoin from 'helpers/classJoin';
import { useContext } from 'react';

const Footer: React.FC = () => {
  const theme = useContext(ThemeContext);
  return (
    <footer
      className={classJoin(
        'w-full backdrop-blur-sm bg-gradient-to-b transition-all',
        theme === 'dark'
          ? 'bg-slate-900/10'
          : theme === 'light'
          ? 'from-slate-200 to-white/10'
          : '',
      )}
    >
      <section className="w-full flex flex-col justify-center items-center px-8 py-16">
        <p className="font-medium">
          Haneul Choi &copy; 2022. All Rights Reserved.
        </p>
      </section>
    </footer>
  );
};
export default Footer;
