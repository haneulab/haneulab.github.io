interface AboutSectionTitleProps {
  title: string;
}

const AboutSectionTitle: React.FC<AboutSectionTitleProps> = ({ title }) => {
  return (
    <h3 className="font-medium text-2xl text-left mb-8 capitalize">{title}</h3>
  );
};
export default AboutSectionTitle;
