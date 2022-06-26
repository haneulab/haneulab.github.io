/**
 * components
 */
import CardContainer from './card-container';
/**
 * icons
 */
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';

const Projects: React.FC = () => {
  return (
    <div className="w-full flex flex-col justify-center">
      <section className="p-8 md:p-16 lg:px-24">
        <h3 className="mb-12 flex items-center space-x-4 text-amber-500">
          <AiOutlineFundProjectionScreen className="text-2xl lg:text-3xl" />
          <span className="text-2xl lg:text-3xl">My Projects</span>
        </h3>
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-12 pl-4">
          <CardContainer
            {...{
              title: 'Almnond Haus',
              description:
                'Frontend web application for a local coffee shop, AlmondHaus.',
              link: 'https://almondhaus.vercel.app',
            }}
          />
          <CardContainer
            {...{
              title: 'Yuchan Shokudo',
              description:
                'Frontend web application for a local restaurant, Yuchan Shokudo.',
              link: 'https://yuchanshokudo.com',
            }}
          />
          <CardContainer
            {...{
              title: 'UniRound',
              description:
                'Full-stack membership based web application, central platform for ride sharing between college students.',
              link: 'https://uniround.github.io',
            }}
          />
        </div>
      </section>
    </div>
  );
};
export default Projects;
