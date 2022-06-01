import type { ExpertiseUIComponentType } from '@components/app.interface';
import ExpertiseCardList from './ExpertiseCardList';

const ExpertiseUI: ExpertiseUIComponentType = ({ setUIType }) => {
  return (
    <div className="w-full lg:col-span-2 h-max md:h-full justify-center pt-28 md:py-28 px-8 flex flex-col items-center">
      <h3 className="w-full font-bold text-4xl md:text-5xl lg:text-6xl text-center mb-4">
        Technical Expertise
      </h3>
      <p className="text-center font-medium md:text-lg lg:text-xl mb-8 md:mb-12 lg:mb-16">
        Our products serve our clients in the most efficient & effective ways
      </p>
      <div className="w-full sticky top-0 z-50 overflow-x-scroll">
        <ExpertiseCardList setUIType={setUIType} />
      </div>
    </div>
  );
};

export default ExpertiseUI;
