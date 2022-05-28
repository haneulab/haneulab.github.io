import { ThemeContext, themeOptions } from 'contexts/ThemeContext';
import Box from 'customs/Box';
import BoxWrap from 'customs/BoxWrap';
import classJoin from 'helpers/classJoin';
import { useContext } from 'react';
import ExploreCategoryList from './ExploreCategoryList';

const Exploration: React.FC = () => {
  const theme = useContext(ThemeContext);
  return (
    <Box
      className={classJoin(
        'w-full bg-gradient-to-b min-h-screen flex flex-col justify-center items-center',
        themeOptions.pages.index.exploration.container[theme].join(' '),
      )}
      wrapper={
        <BoxWrap
          className="px-8 py-28"
          element={
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-16 max-w-6xl mx-auto items-center">
              <div className="w-full mx-auto lg:col-span-2 relative flex  flex-col space-y-4">
                <article className="flex items-center justify-center relative">
                  <span
                    className={classJoin(
                      'w-10 h-10 backdrop-blur-sm transition-all relative left-5 transform rounded-full',
                      themeOptions.pages.index.exploration.container.wrapper.headShapes[1][
                        theme
                      ].join(' '),
                    )}
                  />

                  <span
                    className={classJoin(
                      'w-16 h-10 backdrop-blur-sm transition-all relative animate-bounce  rounded-full',
                      themeOptions.pages.index.exploration.container.wrapper.headShapes[2][
                        theme
                      ].join(' '),
                    )}
                  />
                  <span
                    className={classJoin(
                      'w-32 h-10 backdrop-blur-sm transition-all relative right-5 transform rounded-full',
                      themeOptions.pages.index.exploration.container.wrapper.headShapes[3][
                        theme
                      ].join(' '),
                    )}
                  />
                </article>
                <article className="relative z-20">
                  <h3
                    className={classJoin(
                      'text-center font-bold text-4xl md:text-5xl lg:text-6xl mb-4 bg-clip-text text-transparent bg-gradient-to-r transition-all',
                      themeOptions.pages.index.exploration.container.wrapper.headText[
                        theme
                      ].join(' '),
                    )}
                  >
                    Explore HaneuLab
                  </h3>
                  <p
                    className={classJoin(
                      'text-lg lg:text-xl lg:leading-10 leading-8 text-center transition-all font-medium',
                      themeOptions.pages.index.exploration.container.wrapper.subText[
                        theme
                      ].join(' '),
                    )}
                  >
                    Instead presenting HaneuLab to you in two simple words,
                    I&apos;d like to categorize things that We do so that you
                    can better understand the services we provide that you may
                    need.
                  </p>
                </article>
              </div>
              <div className="lg:col-span-3 lg:pl-8">
                <ExploreCategoryList />
              </div>
            </div>
          }
        />
      }
    />
  );
};
export default Exploration;
