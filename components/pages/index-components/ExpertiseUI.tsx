import type { ExpertiseUIComponentType } from '@components/app.interface';
import ExpertiseCardList from './ExpertiseCardList';

const ExpertiseUI: ExpertiseUIComponentType = ({ setUIType }) => {
  return (
    <div className="w-full h-full justify-center px-8 md:py-20 lg:py-28 flex flex-col items-center">
      <h3 className="font-bold text-4xl md:text-5xl lg:text-6xl text-center mb-4">
        Technical Expertise
      </h3>
      <p className="text-center font-medium md:text-lg lg:text-xl mb-8 md:mb-12 lg:mb-16">
        Our products serve our clients in the most efficient & effective ways
      </p>
      <ExpertiseCardList setUIType={setUIType} />
    </div>
  );
};

export default ExpertiseUI;
