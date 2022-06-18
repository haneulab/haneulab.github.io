interface ProjectButtonProps {
  buttonFor: string;
  onClick: (option: string) => void;
}

const ProjectButton: React.FC<ProjectButtonProps> = ({
  onClick,
  buttonFor,
}) => {
  return (
    <button
      className="rounded-full font-light md:font-normal lg:font-medium text-sm md:text-lg px-4 md:px-6 lg:px-8 py-2 w-max h-full transition-all hover hover:bg-white/90 hover:text-slate-800"
      onClick={() => onClick(buttonFor.toLowerCase())}
    >
      {buttonFor}
    </button>
  );
};
export default ProjectButton;
