import type {
  ThemeProviderComponentType,
  UseThemeAction,
} from '@apptypes/hooks.type';
import { UseThemeObject } from '@apptypes/hooks.type';
import React from 'react';

export const ThemeContext = React.createContext({});

export const ThemeProvider: ThemeProviderComponentType = ({ children }) => {
  const [theme, setTheme] = React.useState('dark');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme: UseThemeAction = () => {
  const { theme, setTheme } = React.useContext(ThemeContext) as UseThemeObject;
  return {
    theme,
    swapTheme: function () {
      const o = {
        dark: 'light',
        light: 'dark',
      } as {
        dark: 'light';
        light: 'dark';
      };
      setTheme(o[theme]);
    },
  };
};

export default useTheme;
