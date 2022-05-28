import { ThemeContext, themeOptions } from 'contexts/ThemeContext';
import Box from 'customs/Box';
import BoxWrap from 'customs/BoxWrap';
import classJoin from 'helpers/classJoin';
import { useContext } from 'react';
import ContactCategoryList from './ContactCategoryList';

const Contact: React.FC = () => {
  const theme = useContext(ThemeContext);
  return (
    <Box
      className={classJoin(
        'w-full bg-gradient-to-b transition-all',
        themeOptions.pages.index.contact.container[theme].join(' '),
      )}
      wrapper={
        <BoxWrap
          className={'w-full px-8 py-28'}
          element={
            <div className="grid grid-cols-1 gap-8">
              <div>
                <h3 className="text-4xl lg:text-5xl font-bold text-center mb-4">
                  For Any Questions
                </h3>
                <h4 className="font-medium text-2xl lg:text-3xl text-center">
                  Contact HaneuLab
                </h4>
              </div>
              <div className="w-full max-w-4xl mx-auto">
                <ContactCategoryList />
                <div className="mt-8">
                  <h3 className="flex flex-col justify-center items-center">
                    <span className="font-bold text-2xl lg:text-3xl xl:text-4xl">
                      Via Email
                    </span>
                    <a
                      className="text-lg lg:text-xl xl:text-2xl"
                      href="mailto:hanchoi@ucdavis.edu"
                    >
                      hanchoi@ucdavis.edu
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          }
        />
      }
    />
  );
};

export default Contact;
