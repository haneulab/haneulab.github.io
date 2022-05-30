import { createContext } from 'react';
import type { ThemeContextType } from './context.interface';

export const Theme = createContext<ThemeContextType>('light');
const DARK = {
  bg: 'bg-black/80',
  text: 'text-white/80',
};
const LIGHT = {
  bg: 'bg-white/80',
  text: 'text-black/80',
};
export const THEME = {
  container: {
    light: {
      bg: LIGHT.bg,
      text: LIGHT.text,
    },
    dark: {
      bg: DARK.bg,
      text: DARK.text,
    },
  },
};
