import { createContext } from 'react';

/**
 * page theme context
 * @returns : string<'dark' | 'light'>
 */
export const ThemeContext = createContext<'light' | 'dark'>('light');
