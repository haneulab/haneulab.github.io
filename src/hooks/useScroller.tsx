import type {
  ScrollPosiitonType,
  UseScrollerAction,
} from '@apptypes/hooks.type';
import React from 'react';
const useScroller: UseScrollerAction = () => {
  const [scroll, setScroll] = React.useState<ScrollPosiitonType>('top');

  React.useEffect(() => {
    function isScrollTop() {
      return (
        (window.scrollY >= 0 && window.scrollY <= 100) ||
        (document.documentElement.scrollTop > 0 &&
          document.documentElement.scrollTop <= 100)
      );
    }
    function isScrollMiddle() {
      return (
        !isScrollTop() &&
        ((window.scrollY > 100 && window.scrollY <= 400) ||
          (document.documentElement.scrollTop > 100 &&
            document.documentElement.scrollTop <= 400))
      );
    }

    if (isScrollTop()) {
      setScroll('top');
    } else {
      if (isScrollMiddle()) {
        setScroll('middle');
      } else {
        setScroll('middle');
      }
    }
  }, [scroll]);

  return {
    currentScrollAt: scroll,
  };
};

export default useScroller;
