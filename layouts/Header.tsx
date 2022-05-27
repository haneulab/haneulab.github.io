import { HeaderProps } from 'interfaces/layouts';
import Link from 'next/link';

const Header: React.FC<HeaderProps> = ({ ThemeBarComponent }) => {
  return (
    <header>
      <section>
        <Link href={'/'}>
          <a>Haneul Choi</a>
        </Link>
        {ThemeBarComponent}
      </section>
    </header>
  );
};
export default Header;
