import { ContactCategoryProps } from 'interfaces/components';

const ContactCategory: React.FC<ContactCategoryProps> = ({
  title,
  href,
  icon,
}) => {
  return (
    <a
      href={href}
      className="w-full text-lg lg:text-xl flex justify-center items-center rounded-3xl shadow-xl bg-white/10 transition-all hover hover:bg-white/30 hover:shadow-2xl hover:shadow-black/30 backdrop-blur-sm"
    >
      <span className="w-full flex justify-between items-center px-8 py-4">
        {icon}
        <span className="font-medium">{title}</span>
      </span>
    </a>
  );
};

export default ContactCategory;
