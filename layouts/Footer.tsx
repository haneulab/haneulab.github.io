import { ThemeContext } from 'contexts/ThemeContext';
import classJoin from 'helpers/classJoin';
import { useContext } from 'react';

const Footer: React.FC = () => {
  const theme = useContext(ThemeContext);
  return (
    <footer
      className={classJoin(
        'w-full bg-gradient-to-r transition-all',
        theme === 'dark'
          ? 'to-slate-900/90 from-slate-800/90 '
          : theme === 'light'
          ? 'to-slate-50/90 from-white'
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
