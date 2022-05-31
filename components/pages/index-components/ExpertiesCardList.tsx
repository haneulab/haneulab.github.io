import ExpertiesCard from './ExpertiseCard';
import {
  MdImportantDevices,
  MdOutlineElectricalServices,
  MdPriceCheck,
} from 'react-icons/md';
import { AiOutlineTeam } from 'react-icons/ai';

const ExpertiesCardList: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-full space-y-8">
      <ExpertiesCard
        title="Design Expertise"
        icon={<MdImportantDevices className="text-2xl lg:text-3xl" />}
      />
      <ExpertiesCard
        title="Service Integration"
        icon={<MdOutlineElectricalServices className="text-2xl lg:text-3xl" />}
      />
      <ExpertiesCard
        title="Flexible Pricing"
        icon={<MdPriceCheck className="text-2xl lg:text-3xl" />}
      />
      <ExpertiesCard
        title="Excellent Communication"
        icon={<AiOutlineTeam className="text-2xl lg:text-3xl" />}
      />
    </div>
  );
};

export default ExpertiesCardList;
