import ExploreCategory from './ExploreCategory';
import { FaLaptopCode, FaLayerGroup } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
const ExploreCategoryList: React.FC = () => {
  return (
    <ul className="flex flex-col space-y-4">
      <ExploreCategory
        title="Developer Life"
        description="Learn About My Life As A Developer"
        icon={<FaLaptopCode className="text-4xl" />}
        href="render"
      />
      <ExploreCategory
        title="Personal Life"
        description="A Day In My Life"
        icon={<BsFillPersonLinesFill className="text-4xl" />}
        href="render"
      />
      <ExploreCategory
        title="Activities"
        description="My Professional Involvement"
        icon={<FaLayerGroup className="text-4xl" />}
        href="render"
      />
      <ExploreCategory
        title="Development Project"
        description="Projects"
        icon={<AiOutlineFundProjectionScreen className="text-4xl" />}
        href="render"
      />
    </ul>
  );
};
export default ExploreCategoryList;
