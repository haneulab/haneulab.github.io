import type { LayoutComponentType } from '@apptypes/components.type';
import useTheme from '@hooks/useTheme';
import { mergeClasses } from '@libs/index';
import React from 'react';

const Layout: LayoutComponentType = ({ children }) => {
  const { theme } = useTheme();
  return (
    <div
      className={mergeClasses(
        'w-full transition-all transform min-h-screen',
        theme === 'dark'
          ? 'bg-slate-900 text-slate-50'
          : 'bg-slate-100 text-slate-700',
      )}
    >
      {children}
    </div>
  );
};

export default Layout;
