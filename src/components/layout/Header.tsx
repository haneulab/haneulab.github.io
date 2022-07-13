import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useState } from 'react';
import AppTitle from './utils/AppTitle';
import DesktopNavigation from './utils/DesktopNavigation';
import MobileNavigation from './utils/MobileNavigation';
import MobileToggleButton from './utils/MobileToggleButton';
const Header: React.FC = () => {
  // router
  const router = useRouter();

  // mobile toggle navigation on-view state
  const [mobileToggleNavView, setMobileToggleNavView] =
    useState<boolean>(false);
  // mobile toggle navigation on-view state swap function
  const toggleMobileNav = () => {
    setMobileToggleNavView((cur) => !cur);
  };
  // mobile toggle navigation on-view state set to false when route (pathname) changes
  useEffect(() => {
    setMobileToggleNavView(false);
  }, [router.pathname]);

  return (
    <header className="fixed w-full top-0 z-50 bg-dark-primary lg:bg-transparent lg:backdrop-blur-sm">
      <section className="relative z-10 p-4 w-full max-w-6xl mx-auto flex justify-between items-center bg-dark-primary lg:bg-transparent">
        <AppTitle />
        <MobileToggleButton
          mobileToggleNavView={mobileToggleNavView}
          onClick={toggleMobileNav}
        />
        <DesktopNavigation />
      </section>
      <MobileNavigation mobileToggleNavView={mobileToggleNavView} />
    </header>
  );
};
export default Header;
