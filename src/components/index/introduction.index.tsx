import useTheme from '@hooks/useTheme';
import { mergeClasses } from '@libs/index';
import { AiOutlineTag } from 'react-icons/ai';
const Introduction: React.FC = () => {
  const { theme } = useTheme();
  return (
    <div data-type={'introduction'} className="h-screen">
      <section className="w-full h-full px-8 py-28 grid grid-cols-1 lg:grid-cols-2 max-w-6xl mx-auto">
        <div className="w-full h-full flex flex-col justify-center items-start">
          <div>
            <h3 className="font-semibold flex flex-col text-7xl space-y-4 md:space-y-6 lg:space-y-8 mb-8">
              <span
                className={mergeClasses(
                  'w-full transition-all bg-clip-text text-transparent bg-gradient-to-br',
                  theme === 'dark'
                    ? 'from-emerald-400  to-teal-500'
                    : 'from-teal-500 to-emerald-400',
                )}
              >
                Make It Better,
              </span>
              <span
                className={mergeClasses(
                  'text-4xl md:text-5xl lg:text-6xl flex flex-col space-y-1 md:space-y-2 lg:space-y-3 w-full transition-all',
                  theme === 'dark' ? 'text-slate-300' : 'text-slate-600',
                )}
              >
                <span>Custom Design</span>
                <span>Service Integration</span>
                <span>Fast Maintenance</span>
              </span>
            </h3>
            <div className="w-full grid grid-cols-1 gap-4 lg:grid-cols-6">
              <button
                className={mergeClasses(
                  'bg-gradient-to-br lg:col-span-2 transition-all px-5 py-3 text-xl font-medium rounded-xl shadow-md',
                  theme === 'dark'
                    ? 'from-emerald-400 to-emerald-600 text-slate-200'
                    : 'from-emerald-500 to-emerald-400 text-slate-50',
                )}
              >
                Get Started
              </button>
              <div className="flex overflow-hidden px-4 py-3 w-auto lg:col-span-4 bg-emerald-500/0 rounded-xl backdrop-blur-sm border-2 border-teal-500/0">
                <div className="scroll flex space-x-4 ">
                  <code className="w-max flex justify-center items-center space-x-4 px-4 py-1 border rounded-full border-slate-400/50">
                    <AiOutlineTag />
                    <span className="w-max">Flexible Pricing</span>
                  </code>
                  <code className="w-max flex justify-center items-center space-x-4 px-4 py-1 border rounded-full border-slate-400/50">
                    <AiOutlineTag />
                    <span className="w-max">User Centric Design</span>
                  </code>
                  <code className="w-max flex justify-center items-center space-x-4 px-4 py-1 border rounded-full border-slate-400/50">
                    <AiOutlineTag />
                    <span className="w-max">Service Programming</span>
                  </code>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full flex flex-col justify-center items-center lg:rounded-l-full lg:bg-emerald-500">
          <div className="p-8">
            <h2
              className={mergeClasses(
                'text-center font-bold text-4xl transition-all bg-clip-text rounded-full text-transparent',
                theme === 'dark' ? 'bg-slate-700' : 'text-slate-800',
              )}
            >
              HaneuLab
            </h2>
            <h2
              className={mergeClasses(
                'text-2xl font-light text-center transition-all',
                theme === 'dark' ? 'text-slate-200' : 'text-slate-600',
              )}
            >
              Presents
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Introduction;
