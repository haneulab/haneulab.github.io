import useTheme from '@hooks/useTheme';
import { mergeClasses } from '@libs/index';

const Footer: React.FC = () => {
  const { theme } = useTheme();
  return (
    <footer
      className={mergeClasses(
        'w-full transition-all border-t',
        theme === 'dark'
          ? 'bg-slate-900 text-emerald-400 border-emerald-500/50'
          : 'bg-emerald-400 text-slate-100 border-emerald-500/0',
      )}
    >
      <section className="w-full px-8 py-20 flex flex-col justify-center items-center">
        <p>HaneuLab &copy; 2022. All rights reserved</p>
      </section>
    </footer>
  );
};
export default Footer;
