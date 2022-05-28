import { createContext } from 'react';

/**
 * page theme context
 * @returns : string<'dark' | 'light'>
 */
export const ThemeContext = createContext<'light' | 'dark'>('dark');
export const themeOptions = {
  layout: {
    dark: ['bg-black/80', 'text-slate-50'],
    light: ['bg-slate-50', 'text-black/80'],
  },
  header: {
    themeButton: {
      dark: ['text-slate-50'],
      light: ['text-black/80'],
    },
  },
  pages: {
    index: {
      introduction: {
        container: {
          dark: ['from-black/80', 'via-black/50', 'to-blue-700'],
          light: ['from-slate-50', 'via-slate-50/70', 'to-blue-200'],
        },
        wrapper: {
          headText: {
            dark: ['text-slate-50'],
            light: ['text-black/80'],
          },
          subText: {
            1: {
              dark: ['from-blue-500', 'to-indigo-500  '],
              light: ['from-indigo-500', 'to-blue-500'],
            },
            2: {
              dark: ['from-indigo-500', 'to-purple-500  '],
              light: ['from-purple-500', 'to-indigo-500'],
            },
            3: {
              dark: ['text-slate-50'],
              light: ['text-black/80'],
            },
          },
        },
      },
      exploration: {
        container: {
          dark: ['from-blue-700', 'via-indigo-700', 'to-purple-700'],
          light: ['from-blue-200', 'via-indigo-200', 'to-slate-50'],
          wrapper: {
            headShapes: {
              1: {
                dark: ['bg-blue-500/90'],
                light: ['bg-blue-500/50'],
              },
              2: {
                dark: ['bg-indigo-500/90'],
                light: ['bg-blue-500/50'],
              },
              3: {
                dark: ['bg-purple-500/90'],
                light: ['bg-purple-500/50'],
              },
            },
            headText: {
              dark: ['from-blue-200', 'via-indigo-200', 'to-purple-200'],
              light: ['from-blue-500', 'via-indigo-500', 'to-purple-500'],
            },
            subText: {
              dark: ['text-slate-200'],
              light: ['text-blue-500/50'],
            },
          },
        },
        category: {
          dark: ['from-indigo-500/70', 'to-blue-500/70'],
          light: ['from-slate-50/70', 'to-white/50', 'text-slate-600/70'],
        },
      },
    },
  },
};
