import type { LayoutComponentType } from '@components/app.interface';
import Header from '@components/layouts/Header';
import Footer from '@components/layouts/Footer';
import MobileGroundBar from './layouts/MobileGroundBar';
import { cls } from '@libs/index.helper';
import { useContext, useEffect, useState } from 'react';
import { THEME, Theme } from './contexts/Theme';

const Layout: LayoutComponentType = ({ children, setters }) => {
  const { setTheme, setLanguage } = setters;
  const theme = useContext(Theme);

  const [scrollBottom, setScrollBottom] = useState<boolean>(false);
  const [scrollTopLeave, setScrollTopLeave] = useState<boolean>(false);

  useEffect(() => {
    const scrollBottomHandler = () => {
      if (
        window.innerHeight + window.scrollY >
        document.body.clientHeight - 100
      ) {
        setScrollBottom(true);
      } else {
        setScrollBottom(false);
      }
    };
    const scrollTopLeaveHandler = () => {
      if (window.scrollY > 50 || document.documentElement.scrollTop > 50) {
        setScrollTopLeave(true);
      } else {
        setScrollTopLeave(false);
      }
    };
    window.addEventListener('scroll', () => {
      scrollBottomHandler();
      scrollTopLeaveHandler();
    });

    return window.removeEventListener('scroll', () => {
      scrollBottomHandler();
      scrollTopLeaveHandler();
    });
  }, [scrollBottom, scrollTopLeave]);

  return (
    <div
      className={cls(
        'w-full overflow-hidden transition-all relative',
        THEME.container[theme].bg,
        THEME.container[theme].text,
      )}
    >
      <Header scrollLeave={scrollTopLeave} setTheme={setTheme} />
      {children}
      <Footer />
      <MobileGroundBar scrollBottom={scrollBottom} setLanugage={setLanguage} />
    </div>
  );
};

export default Layout;
