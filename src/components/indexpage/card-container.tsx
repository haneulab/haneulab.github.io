interface CardContainerProps {
  title: string;
  description: string;
  link?: string;
}
const CardContainer: React.FC<CardContainerProps> = ({
  title,
  description,
  link,
}) => {
  return (
    <div className="border-l w-full">
      <section className="p-8 w-full">
        <h4 className="text-3xl mb-4 text-gray-600">{title}</h4>
        <p className="h-full text-base lg:text-lg leading-7 lg:leading-8 text-gray-500">
          {description}
        </p>
        {link ? (
          <div className="mt-8 w-full">
            <a
              className="font-medium text-lg border-l-4 pl-4 text-amber-400 border-amber-400 transition-all hover hover:border-l-8 hover:text-amber-300"
              href={link}
            >
              View Demo
            </a>
          </div>
        ) : null}
      </section>
    </div>
  );
};
export default CardContainer;
