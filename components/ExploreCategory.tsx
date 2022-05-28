import { ThemeContext, themeOptions } from 'contexts/ThemeContext';
import classJoin from 'helpers/classJoin';
import { ExploreCategoryProps } from 'interfaces/components';
import Link from 'next/link';
import { useContext } from 'react';

const ExploreCategory: React.FC<ExploreCategoryProps> = ({
  title,
  description,
  href,
  icon,
}) => {
  const theme = useContext(ThemeContext);
  return (
    <Link href={href}>
      <a
        className={classJoin(
          'flex justify-between backdrop-blur-md items-start transition-all hover hover:opacity-80 bg-gradient-to-r rounded-md shadow-md p-6 space-x-8 lg:space-x-4',
          themeOptions.pages.index.exploration.category[theme].join(' '),
        )}
      >
        <span>{icon}</span>
        <span className="flex flex-col space-y-2 justify-center items-end pl-0">
          <span className="font-bold text-xl text-right">{title}</span>
          <span className="font-light text-right">{description}</span>
        </span>
      </a>
    </Link>
  );
};
export default ExploreCategory;
