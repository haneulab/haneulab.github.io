import Image from 'next/image';
import { WorkDataInterface } from 'src/data/works';
import { AiOutlineRead, AiOutlineFundView } from 'react-icons/ai';
import { useRouter } from 'next/router';
const WorkCard: React.FC<WorkDataInterface> = ({
  id,
  title,
  img,
  description,
  type,
  links,
}) => {
  // router push onClick event
  const router = useRouter();
  const onClickViewProjectDetail = (rawTitle: string) => {
    const title = rawTitle.toLowerCase();
    router.push(
      {
        pathname: `/projects/${title}`,
        query: {
          title,
        },
      },
      `/projects/${title}`,
    );
  };

  return (
    <div
      onClick={() => onClickViewProjectDetail(title)}
      className="w-full relative max-w-sm mx-auto cursor-pointer rounded-xl bg-gradient-to-t from-dark-primary to-dark-secondary border-b-4 border-x-2 border-t-2 border-dark-blue/20 shadow-md shadow-dark-blue/10 flex flex-col space-y-2"
    >
      <div className="absolute top-6 left-6">
        <h3 className="capitalize flex flex-col">
          <span className="font-light text-dark-blue text-xs md:text-sm lg:text-base">
            {type}
          </span>
          <span className="text-base md:text-lg lg:text-xl 2xl:text-2xl font-bold font-roboto text-dark-light mb-3 lg:mb-6">
            {title}
          </span>
        </h3>
      </div>
      <div className="relative top-0 transition-all lg:hover:p-3 transform lg:hover:rotate-12 ease-out lg:hover:animate-pulse">
        <Image
          src={img}
          alt={`Image for Project ${id} | ${title}`}
          placeholder="blur"
          className="transition-all"
        />
      </div>
      <div className="px-6 relative -top-6">
        <p className="text-sm leading-6 lg:text-base lg:leading-7 text-dark-light/75">
          {description.short}
        </p>
        <div className="mt-3">
          <button
            className="text-sm rounded-xl px-3 py-2 w-full text-center border border-dark-blue text-dark-blue shadow-md transition-all lg:hover:bg-dark-blue/5 lg:hover:border-dark-blue/50 lg:hover:shadow-dark-blue/5 lg:hover:text-dark-light"
            onClick={() => onClickViewProjectDetail(title)}
          >
            Project Detail
          </button>
        </div>
      </div>

      {links && (
        <div className="px-6 pb-6">
          <ul className="flex flex-col space-y-2 lg:space-y-0 lg:space-x-4 lg:flex-row items-start lg:items-center">
            {links.README && (
              <li>
                <a
                  href={links.README}
                  className="flex items-center space-x-2 transition-all lg:hover:text-dark-blue"
                >
                  <AiOutlineRead />
                  <span className="text-xs">Source Code</span>
                </a>
              </li>
            )}
            {links.README && (
              <li>
                <a
                  href={links.README}
                  className="flex items-center space-x-2 transition-all lg:hover:text-dark-blue"
                >
                  <AiOutlineFundView />
                  <span className="text-xs">View Product</span>
                </a>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};
export default WorkCard;
