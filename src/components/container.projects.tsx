interface ProjectContainerProps {
  children: JSX.Element;
  containerFor: string;
}
const ProjectContainer: React.FC<ProjectContainerProps> = ({
  children,
  containerFor,
}) => {
  return (
    <section
      className="relative px-8 py-12 grid grid-cols-1 lg:grid-cols-2 gap-8"
      data-container={containerFor}
    >
      {children}
    </section>
  );
};
export default ProjectContainer;
