import type { LayoutComponentType } from '@apptypes/components.type';
import useTheme from '@hooks/useTheme';
import { mergeClasses } from '@libs/index';
import React from 'react';

const Layout: LayoutComponentType = ({ children }) => {
  const { theme } = useTheme();
  return (
    <div
      className={mergeClasses(
        'w-full transition-all transform relative',
        theme === 'dark'
          ? 'bg-black/90 text-slate-50'
          : 'bg-slate-50 text-black/90',
      )}
    >
      {children}
    </div>
  );
};

export default Layout;
