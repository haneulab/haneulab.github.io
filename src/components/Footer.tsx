import useTheme from '@hooks/useTheme';
import { mergeClasses } from '@libs/index';

const Footer: React.FC = () => {
  const { theme } = useTheme();
  return (
    <footer
      className={mergeClasses(
        'w-full transition-all border-t ',
        theme === 'dark'
          ? 'bg-black/50 text-slate-200/50 border-slate-200/10'
          : 'bg-slate-100/50 text-slate-600/50 border-slate-200/90',
      )}
    >
      <section className="w-full px-8 py-20 flex flex-col justify-center items-center">
        <p>HaneuLab &copy; 2022. All rights reserved</p>
      </section>
    </footer>
  );
};
export default Footer;
