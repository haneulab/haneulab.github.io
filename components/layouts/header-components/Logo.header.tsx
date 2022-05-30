import Link from 'next/link';

const Logo: React.FC = () => {
  return (
    <div className="w-full">
      <h1>
        <Link href="/">
          <a className="font-bold text-3xl">HaneuLab</a>
        </Link>
      </h1>
    </div>
  );
};

export default Logo;
