interface AboutSectionTitleProps {
  title: string;
}

const AboutSectionTitle: React.FC<AboutSectionTitleProps> = ({ title }) => {
  return (
    <h3 className="text-2xl text-left mb-8 capitalize font-roboto font-bold">
      {title}
    </h3>
  );
};
export default AboutSectionTitle;
