/**
 * icons
 */
import { IoPersonOutline } from 'react-icons/io5';

import CardContainer from './card-container';
const About: React.FC = () => {
  return (
    <div className="w-full flex flex-col justify-center">
      <section className="p-8 md:p-16 lg:px-24">
        <h3 className="mb-12 flex items-center space-x-4 text-amber-500">
          <IoPersonOutline className="text-2xl lg:text-3xl" />
          <span className="text-2xl lg:text-3xl">About Me</span>
        </h3>
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-12 pl-4">
          <CardContainer
            {...{
              title: 'Introduction',
              description:
                'Hi, I am Haneul Choi. I am a software developer based in California.',
            }}
          />
          <CardContainer
            {...{
              title: 'Education',
              description:
                'A.A Natural Sciences with mathematics emphasis, A.T Mathematics, B.S Cognitive Science',
            }}
          />
          <CardContainer
            {...{
              title: 'Software Skills',
              description:
                'HTML, CSS, JavaScript, TypeScript, C, Python, ReactJS, NextJS, TailwindCSS, FramerMotion, Git, Github',
            }}
          />
          <CardContainer
            {...{
              title: 'Languages',
              description: 'Korean, English',
            }}
          />
        </div>
      </section>
    </div>
  );
};
export default About;
