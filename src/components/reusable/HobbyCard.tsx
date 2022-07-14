import { reactClassNames } from '@motioned-official/react-functions';
import Image, { StaticImageData } from 'next/image';

interface HobbyCardProps {
  image: {
    href: string | StaticImageData;
    alt: string;
  };
  flexReverse?: boolean;
  title: string;
}

const HobbyCard: React.FC<HobbyCardProps> = ({ image, flexReverse, title }) => {
  return (
    <article
      className={reactClassNames(
        'transition-all w-full flex justify-between items-center lg:hover:p-4 lg:hover:cursor-pointer ease-out',
        flexReverse ? 'flex-row-reverse' : '',
      )}
    >
      <Image src={image.href} alt={image.alt} className="w-1/2" />
      <span
        className={reactClassNames(
          'font-bold text-xl',
          flexReverse ? 'text-left' : 'text-right',
        )}
      >
        {title}
      </span>
    </article>
  );
};
export default HobbyCard;
