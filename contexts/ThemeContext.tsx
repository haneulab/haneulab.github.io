import { createContext } from 'react';

/**
 * page theme context
 * @returns : string<'dark' | 'light'>
 */
export const ThemeContext = createContext<'light' | 'dark'>('dark');
/**
 * global context variables
 */
const BG = {
  solid: {
    dark: 'bg-slate-900',
    light: 'bg-white/90',
  },
  gradient: {
    dark: {
      from: 'from-slate-900',
      via: 'via-slate-800',
      to: 'to-slate-800',
    },
    light: {
      from: 'from-white/90',
      via: 'via-slate-50',
      to: 'to-slate-100',
    },
  },
};
const TEXT = {
  dark: 'text-slate-50',
  light: 'text-slate-700',
};
export const themeOptions = {
  layout: {
    dark: [BG.solid.dark, TEXT.dark],
    light: [BG.solid.light, TEXT.light],
  },
  header: {
    themeButton: {
      dark: [TEXT.dark],
      light: [TEXT.light],
    },
  },
  pages: {
    index: {
      introduction: {
        container: {
          dark: Object.values(BG.gradient.dark),
          light: Object.values(BG.gradient.light),
        },
        wrapper: {
          headText: {
            dark: ['text-slate-50'],
            light: ['text-slate-700'],
          },
          subText: {
            1: {
              dark: ['from-blue-500', 'to-cyan-500  '],
              light: ['from-cyan-500', 'to-blue-500'],
            },
            2: {
              dark: ['from-cyan-500', 'to-blue-100'],
              light: ['from-blue-500', 'to-cyan-500'],
            },
            3: {
              dark: ['text-slate-50'],
              light: ['text-black/80'],
            },
          },
          button: {
            dark: ['from-blue-500', 'via-sky-400', 'to-cyan-300'],
            light: [
              'from-cyan-300',
              'via-sky-400',
              'to-blue-500',
              'text-slate-50',
            ],
          },
        },
      },
      exploration: {
        container: {
          dark: ['from-slate-800', 'via-slat-900/70', 'to-slate-900'],
          light: ['from-slate-100', 'via-slate-100', 'to-slate-200'],
          wrapper: {
            headShapes: {
              1: {
                dark: ['bg-cyan-500/30'],
                light: ['bg-cyan-700/30'],
              },
              2: {
                dark: ['bg-blue-500/30'],
                light: ['bg-blue-700/30'],
              },
              3: {
                dark: ['bg-slate-500/10'],
                light: ['bg-slate-700/10'],
              },
            },
            headText: {
              dark: ['from-blue-500', 'to-cyan-400'],
              light: ['from-blue-400', 'to-cyan-500'],
            },
            subText: {
              dark: ['text-slate-200'],
              light: ['text-blue-20/50'],
            },
          },
        },
        category: {
          dark: ['from-black/5', 'via-black/10', 'to-black/5'],
          light: ['from-slate-500/5', 'via-slate-50/5', 'to-slate-500/5'],
        },
      },
      contact: {
        container: {
          dark: ['from-slate-900', 'to-slate-900'],
          light: ['from-slate-200', 'to-slate-200'],
          wrapper: {},
        },
      },
    },
  },
};
