/**
 * static data
 */
import { PROJECTS } from 'static-data';
/**
 * components
 */
import ProjectCard from './project-card';

const Hero: React.FC = () => {
  return (
    <div className="w-full">
      <section className="p-8 py-28 md:px-16 lg:px-24 w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
        {PROJECTS.map((eachProject, projectIndex) => (
          <ProjectCard key={projectIndex} {...eachProject} />
        ))}
      </section>
    </div>
  );
};
export default Hero;
