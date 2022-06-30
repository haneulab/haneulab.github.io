/**
 * icons
 */
import { MdCalendarViewMonth } from 'react-icons/md';
/**
 * local interfaces & types
 */
interface ProjectCardProps {
  title: string;
  description: string;
  href?: string;
  category: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  href,
  category,
}) => {
  return (
    <article className="border-2 w-full border-amber-500/50 backdrop-blur-sm bg-white/90 shadow-gray-500/10 transition-all hover shadow-none lg:hover:shadow-xl lg:hover:border-amber-500/90 cursor-pointer">
      <section className="flex flex-col w-full h-full justfiy-between">
        <div className="flex flex-col px-8 pt-8 h-full">
          <code className="capitalize font-sans block text-sm text-gray-400">
            {category.split('-').join(' ')}
          </code>
          <h3 className="font-sans font-bold text-gray-500 text-2xl lg:text-3xl mb-4">
            {title}
          </h3>
          <p className="text-base lg:text-lg leading-7 lg:leading-8 text-gray-500">
            {description}
          </p>
        </div>
        {href ? (
          <a
            href={href}
            className="flex px-8 py-4 mt-4 h-max font-bold text-amber-400 hover:text-amber-500 border-l-0 border-transparent transition-all hover:border-l-8 hover:border-l-amber-400 items-center space-x-2"
          >
            <span>View Project</span> <MdCalendarViewMonth />
          </a>
        ) : (
          <p>No View For This Project</p>
        )}
      </section>
    </article>
  );
};
export default ProjectCard;
