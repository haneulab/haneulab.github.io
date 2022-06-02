import useTheme from '@hooks/useTheme';
import { mergeClasses } from '@libs/index';
import Link from 'next/link';
import { AiOutlineSetting, AiOutlineHighlight } from 'react-icons/ai';
const Header: React.FC = () => {
  const { theme, swapTheme } = useTheme();
  return (
    <header className="w-full fixed top-0 z-40">
      <section className="flex justify-between max-w-6xl mx-auto items-center px-8 py-8 space-x-6">
        <h1>
          <Link href="/">
            <a
              className={mergeClasses(
                'font-bold text-5xl rounded-full transition-all hover bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500 hover',
                theme === 'dark'
                  ? 'hover:from-teal-700 hover:to-teal-700'
                  : 'hover:from-teal-400 hover:to-teal-400',
              )}
            >
              HL
            </a>
          </Link>
        </h1>
        <div className="w-full flex justify-end items-center space-x-2">
          <button
            onClick={swapTheme}
            className={mergeClasses(
              'transition-all p-3 border-2 border-opacity-50 border-transparent rounded-full shadow-2xl transform hover hover:bg-opacity-80',
              theme === 'dark'
                ? 'bg-emerald-500 text-slate-800 rotate-90'
                : 'bg-emerald-500 text-slate-100 -rotate-180',
            )}
          >
            <AiOutlineHighlight className="text-2xl" />
          </button>
          <button
            className={mergeClasses(
              'transition-all p-3 border-2 border-opacity-50  rounded-full shadow-2xl hover ',
              theme === 'dark'
                ? 'bg-transparent border-emerald-500 text-emerald-500 hover:bg-emerald-900'
                : 'bg-white border-slate-800 text-slate-800 hover:bg-emerald-200',
            )}
          >
            <AiOutlineSetting className="text-2xl" />
          </button>
        </div>
        <nav className="hidden lg:flex items-center space-x-4 xl:space-x-8 text-lg font-medum">
          <a
            className={mergeClasses(
              'transition-all hover',
              theme === 'dark'
                ? 'hover:text-emerald-600'
                : 'hover:text-slate-400',
            )}
            href="#"
          >
            Home
          </a>
          <a
            className={mergeClasses(
              'transition-all hover',
              theme === 'dark'
                ? 'hover:text-emerald-600'
                : 'hover:text-slate-400',
            )}
            href="#"
          >
            About
          </a>
          <a
            className={mergeClasses(
              'transition-all hover',
              theme === 'dark'
                ? 'hover:text-emerald-600'
                : 'hover:text-slate-400',
            )}
            href="#"
          >
            Products
          </a>
          <a
            className={mergeClasses(
              'transition-all hover',
              theme === 'dark'
                ? 'hover:text-emerald-600'
                : 'hover:text-slate-400',
            )}
            href="#"
          >
            FAQs
          </a>
          <a
            className={mergeClasses(
              'transition-all hover',
              theme === 'dark'
                ? 'hover:text-emerald-600'
                : 'hover:text-slate-400',
            )}
            href="#"
          >
            Contact
          </a>
        </nav>
      </section>
    </header>
  );
};

export default Header;
