import { ContactCategoryProps } from 'interfaces/components';

const ContactCategory: React.FC<ContactCategoryProps> = ({
  title,
  href,
  icon,
}) => {
  return (
    <a
      href={href}
      className="w-full text-lg lg:text-xl flex justify-center items-center rounded-3xl shadow-xl  transition-all hover hover:bg-slate-100/10 hover:shadow-xl hover:shadow-black/20 backdrop-blur-sm"
    >
      <span className="w-full flex justify-between items-center px-8 py-4">
        {icon}
        <span className="font-medium">{title}</span>
      </span>
    </a>
  );
};

export default ContactCategory;
