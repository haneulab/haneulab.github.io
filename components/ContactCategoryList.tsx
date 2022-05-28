import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';
import ContactCategory from './ContactCategory';

const ContactCategoryList: React.FC = () => {
  return (
    <ul className="w-full max-w-md lg:max-w-full mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 py-8">
      <ContactCategory
        title="Github"
        icon={<BsGithub />}
        href={'https://github.com/haneulab'}
      />
      <ContactCategory
        title="Linkedin"
        icon={<BsLinkedin />}
        href={'https://linkedin.com/in/haneulab'}
      />
      <ContactCategory
        title="Instagram"
        icon={<BsInstagram />}
        href={'https://instagram/haneulab'}
      />
    </ul>
  );
};
export default ContactCategoryList;
