import { mergeClasses } from '@libs/index';
import { useEffect, useState } from 'react';
import { SiBmcsoftware } from 'react-icons/si';

interface ProjectTitleProps {
  title: string;
}
const ProjectTitle: React.FC<ProjectTitleProps> = ({ title }) => {
  const [isTitle, setIsTitle] = useState<boolean>(false);
  useEffect(() => {
    if (title) {
      setTimeout(() => {
        setIsTitle(true);
        setTimeout(() => {
          setIsTitle(false);
        }, 100);
      }, 50);
      setIsTitle(false);
    }
  }, [title]);
  return (
    <p
      className={mergeClasses(
        'absolute w-max flex left-1/2 items-center space-x-2 -top-16 z-20 backdrop-blur-md px-4 py-2 transform -translate-x-1/2  capitalize text-center leading-8 mt-10 rounded-full border shadow-sm transition-all',
        isTitle
          ? '-translate-y-1/2 ease-out opacity-0 '
          : 'translate-y-0 opacity-100',
      )}
    >
      <SiBmcsoftware />
      <span>{title}</span>
    </p>
  );
};
export default ProjectTitle;
