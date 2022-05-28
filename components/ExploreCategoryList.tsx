import ExploreCategory from './ExploreCategory';
import { FaLaptopCode, FaLayerGroup } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
const ExploreCategoryList: React.FC = () => {
  return (
    <ul className="flex flex-col space-y-8">
      <ExploreCategory
        title="Web Development"
        description="From affordable templates to fully customizable web applications for your business."
        icon={<FaLaptopCode className="text-4xl" />}
        href="render"
      />
      <ExploreCategory
        title="Sustainable Management"
        description="We provide strategies for sustainable business operation maintenance in your web applications built by us."
        icon={<BsFillPersonLinesFill className="text-4xl" />}
        href="render"
      />
      <ExploreCategory
        title="Structured Planning For Successful Marketing"
        description="Plan your online business & user management system from scratch so that you can better understand how we manage."
        icon={<FaLayerGroup className="text-4xl" />}
        href="render"
      />
      <ExploreCategory
        title="Optimization Of SEO"
        description="We have great knowledge and tools to provide for your SEO optimization so your website can be reached out to more users."
        icon={<AiOutlineFundProjectionScreen className="text-4xl" />}
        href="render"
      />
    </ul>
  );
};
export default ExploreCategoryList;
