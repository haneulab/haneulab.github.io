import { reactClassNames } from '@motioned-official/react-functions';

interface TitleBubbleProps {
  textContent: string;
}

const TitleBubble: React.FC<TitleBubbleProps> = ({ textContent }) => {
  return (
    <span
      className={reactClassNames(
        'transition-all flex items-center justify-center transform w-6 h-6 lg:w-8 lg:h-8 text-center capitalize rounded-full bg-dark-blue/10 backdrop-blur-sm shadow-2xl text-dark-blue',
        'lg:hover:bg-dark-blue/50 lg:hover:text-dark-light cursor-pointer z-0 scale-100 lg:hover:scale-125 ease-out lg:hover:z-10',
      )}
    >
      <span>{textContent}</span>
    </span>
  );
};

export default TitleBubble;
