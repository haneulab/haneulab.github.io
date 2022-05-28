import { ThemeContext, themeOptions } from 'contexts/ThemeContext';
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
        'w-full transition-all overflow-hidden',
        themeOptions.layout[theme].join(' '),
      )}
    >
      <Header ThemeBarComponent={<ThemeBar setTheme={setTheme} />} />
      <Page>{children}</Page>
      <Footer />
    </div>
  );
};

export default Layout;
