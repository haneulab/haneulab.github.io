import useTheme from '@hooks/useTheme';
import { mergeClasses } from '@libs/index';
import Link from 'next/link';

const Header: React.FC = () => {
  const { theme, swapTheme } = useTheme();
  return (
    <header
      className={mergeClasses(
        'sticky top-0 w-full z-50 transition-all transform backdrop-blur-sm bg-transparent',
      )}
    >
      <section
        className={mergeClasses(
          'p-8 transition-all transform flex justify-between items-center',
        )}
      >
        <div>
          <h1 className="flex flex-col items-start">
            <Link href="/">
              <a className="font-bold text-4xl mb-1">HL</a>
            </Link>
            <span className="relative w-full flex flex-col justify-center items-center">
              <span
                onClick={swapTheme}
                className={mergeClasses(
                  'absolute z-30 p-3 cursor-pointer hover hover:ring-2 hover:ring-offset-1 hover:ring-slate-200 w-4 h-4 rounded-full transition-all transform',
                  theme === 'dark' ? 'left-0  bg-white' : 'right-0 bg-black/80',
                )}
              />
              <span
                className={mergeClasses(
                  'w-full relative z-20 h-2 border p-2 rounded-full transition-all',
                  theme === 'dark'
                    ? 'border-slate-200/30'
                    : 'border-slate-700/30',
                )}
              />
            </span>
          </h1>
        </div>
        <nav>
          <button></button>
        </nav>
      </section>
    </header>
  );
};

export default Header;
