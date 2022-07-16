import { reactClassNames } from '@motioned-official/react-functions';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { BiArrowBack } from 'react-icons/bi';
const AppTitle: React.FC = () => {
  const router = useRouter();
  return (
    <h1>
      <Link href="/projects">
        <a
          className={reactClassNames(
            'transition-all top-0 font-medium transform items-center space-x-1 lg:hover:text-dark-light',
            router.pathname.includes('projects') &&
              router.pathname.split('/').length > 2
              ? 'text-dark-blue/100 flex'
              : 'text-dark-blue/0 hidden',
          )}
        >
          <BiArrowBack />
          <span>All Projects</span>
        </a>
      </Link>

      <Link href="/">
        <a className="font-medium text-2xl">HaneuLab</a>
      </Link>
    </h1>
  );
};
export default AppTitle;
