import { ThemeContext, themeOptions } from 'contexts/ThemeContext';
import Box from 'customs/Box';
import BoxWrap from 'customs/BoxWrap';
import classJoin from 'helpers/classJoin';
import { useContext } from 'react';

const Introduction: React.FC = () => {
  const theme = useContext(ThemeContext);
  return (
    <Box
      className={classJoin(
        'w-full min-h-screen flex flex-col justify-center items-center bg-gradient-to-b',
        themeOptions.pages.index.introduction.container[theme].join(' '),
      )}
      wrapper={
        <BoxWrap
          className="px-8 py-28"
          element={
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 max-w-6xl mx-auto">
              <div>
                <h2 className="flex flex-col items-start justify-center">
                  <span className="font-normal flex items-end space-x-2">
                    <span
                      className={classJoin(
                        'transition-all text-4xl md:text-5xl lg:text-6xl',
                        themeOptions.pages.index.introduction.wrapper.headText[
                          theme
                        ].join(' '),
                      )}
                    >
                      Another Level Of
                    </span>{' '}
                  </span>
                  <span className="font-bold flex flex-col">
                    <span
                      className={classJoin(
                        'bg-clip-text text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-transparent bg-gradient-to-r transition-all',
                        themeOptions.pages.index.introduction.wrapper.subText[1][
                          theme
                        ].join(' '),
                      )}
                    >
                      Design
                    </span>
                    <span
                      className={classJoin(
                        'bg-clip-text mb-8 text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-transparent bg-gradient-to-r transition-all',
                        themeOptions.pages.index.introduction.wrapper.subText[2][
                          theme
                        ].join(' '),
                      )}
                    >
                      & Engineering
                    </span>
                    <span
                      className={classJoin(
                        'text-lg lg:text-xl xl:text-2xl font-medium transition-all text-left font-normal',
                        themeOptions.pages.index.introduction.wrapper.subText[3][
                          theme
                        ].join(' '),
                      )}
                    >
                      For Enterprises & Businesses
                    </span>
                  </span>
                </h2>
                <div className="mt-8 lg:mt-12 xl:mt-16">
                  <button
                    className={classJoin(
                      ' px-5 py-3 lg:px-8 lg:py-4 border-none outline-none rounded-xl transition-all hover hover:animate-bounce shadow-xl font-medium text-lg lg:text-xl bg-gradient-to-tr',
                      themeOptions.pages.index.introduction.wrapper.button[
                        theme
                      ].join(' '),
                    )}
                  >
                    Check Out Our Protfolio
                  </button>
                </div>
              </div>
              <div className="hidden w-full lg:flex flex-col justify-center items-center">
                <img
                  className="w-full"
                  src="https://i.pinimg.com/originals/f9/08/4c/f9084c82df4a5c0800d4ad011ad96b8a.png"
                  alt="team work svg"
                />
              </div>
            </div>
          }
        />
      }
    />
  );
};

export default Introduction;
