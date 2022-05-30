import type { LayoutComponentType } from '@components/app.interface';
import Header from '@components/layouts/Header';
import Footer from '@components/layouts/Footer';
import MobileGroundBar from './layouts/MobileGroundBar';
import { cls } from '@libs/index.helper';
import { useContext } from 'react';
import { THEME, Theme } from './contexts/Theme';

const Layout: LayoutComponentType = ({ children, setters }) => {
  const { setTheme, setLanguage } = setters;
  const theme = useContext(Theme);
  return (
    <div
      className={cls(
        'w-full overflow-hidden transition-all relative',
        THEME.container[theme].bg,
        THEME.container[theme].text,
      )}
    >
      <Header setTheme={setTheme} />
      {children}
      <Footer />
      <MobileGroundBar setLanugage={setLanguage} />
    </div>
  );
};

export default Layout;
