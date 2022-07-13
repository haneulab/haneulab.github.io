import Link from 'next/link';

const AppTitle: React.FC = () => {
  return (
    <h1>
      <Link href="/">
        <a className="font-medium text-2xl">HaneuLab</a>
      </Link>
    </h1>
  );
};
export default AppTitle;
