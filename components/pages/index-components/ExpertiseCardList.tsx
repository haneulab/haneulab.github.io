import ExpertiesCard from './ExpertiseCard';
import {
  MdImportantDevices,
  MdOutlineElectricalServices,
  MdPriceCheck,
} from 'react-icons/md';
import { AiOutlineTeam } from 'react-icons/ai';
import type { ExpertiseCardListComponentType } from '@components/app.interface';

const ExpertiesCardList: ExpertiseCardListComponentType = ({ setUIType }) => {
  return (
    <div className="flex overflow-x-scroll pb-8 space-x-4 md:space-x-0 md:flex-col items-center w-full md:space-y-6 lg:space-y-8">
      <ExpertiesCard
        setUIType={setUIType}
        type="design"
        title="Design Expertise"
        icon={<MdImportantDevices className="text-2xl lg:text-3xl" />}
      />
      <ExpertiesCard
        setUIType={setUIType}
        type="service"
        title="Service Integration"
        icon={<MdOutlineElectricalServices className="text-2xl lg:text-3xl" />}
      />
      <ExpertiesCard
        setUIType={setUIType}
        type="price"
        title="Flexible Pricing"
        icon={<MdPriceCheck className="text-2xl lg:text-3xl" />}
      />
      <ExpertiesCard
        setUIType={setUIType}
        type="communication"
        title="Excellent Communication"
        icon={<AiOutlineTeam className="text-2xl lg:text-3xl" />}
      />
    </div>
  );
};

export default ExpertiesCardList;
