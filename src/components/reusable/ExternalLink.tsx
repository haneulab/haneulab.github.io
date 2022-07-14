interface ExternalLinkProps {
  href: string;
  textContent: string;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({ href, textContent }) => {
  return (
    <a
      href={href ?? '#'}
      className="inline-flex justify-start items-center space-x-4 text-dark-light lg:hover:text-dark-blue transition-all cursor-pointer"
    >
      <span className="flex items-center space-x-1">
        <span className="w-1.5 h-1.5 rounded-xl bg-dark-blue" />
        <span className="w-1.5 h-1.5 rounded-xl bg-dark-blue" />
        <span className="w-1.5 h-1.5 rounded-xl bg-dark-blue" />
      </span>
      <span className="font-medium text-lg capitalize">{textContent}</span>
      <span className="flex items-center space-x-1">
        <span className="w-1.5 h-1.5 rounded-xl bg-dark-blue" />
        <span className="w-1.5 h-1.5 rounded-xl bg-dark-blue" />
        <span className="w-1.5 h-1.5 rounded-xl bg-dark-blue" />
      </span>
    </a>
  );
};
export default ExternalLink;
