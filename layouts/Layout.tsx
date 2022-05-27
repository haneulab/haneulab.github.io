import { ThemeContext } from 'contexts/ThemeContext';
import ThemeBar from 'customs/ThemeBar';
import classJoin from 'helpers/classJoin';
import type { LayoutProps } from 'interfaces/layouts';
import { useContext } from 'react';
import Footer from './Footer';
import Header from './Header';
import Page from './Page';
const Layout: React.FC<LayoutProps> = ({ children, setTheme }) => {
  const theme = useContext(ThemeContext);
  return (
    <div
      id="layout"
      className={classJoin(
        'w-full transition-all bg-gradient-to-r overflow-hidden',
        theme === 'dark'
          ? 'from-slate-900/95 to-slate-900 text-slate-50'
          : theme === 'light'
          ? 'from-slate-900/5 to-slate-50 text-slate-900/80'
          : '',
      )}
    >
      <Header ThemeBarComponent={<ThemeBar setTheme={setTheme} />} />
      <Page>{children}</Page>
      <Footer />
    </div>
  );
};

export default Layout;
