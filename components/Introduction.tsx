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
            <div>
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
                        'bg-clip-text text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-transparent bg-gradient-to-r transition-all',
                        themeOptions.pages.index.introduction.wrapper.subText[1][
                          theme
                        ].join(' '),
                      )}
                    >
                      Design &
                    </span>
                    <span
                      className={classJoin(
                        'bg-clip-text mb-8 text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-transparent bg-gradient-to-r transition-all',
                        themeOptions.pages.index.introduction.wrapper.subText[2][
                          theme
                        ].join(' '),
                      )}
                    >
                      Engineering
                    </span>
                    <span
                      className={classJoin(
                        'text-2xl lg:text-3xl transition-all text-left font-normal',
                        themeOptions.pages.index.introduction.wrapper.subText[3][
                          theme
                        ].join(' '),
                      )}
                    >
                      For Enterprises & Businesses
                    </span>
                  </span>
                </h2>
              </div>
              <div></div>
            </div>
          }
        />
      }
    />
  );
};

export default Introduction;
