import { Dispatch, SetStateAction } from 'react';

export interface ThemeBarProps {
  setTheme: Dispatch<SetStateAction<'dark' | 'light'>>;
}
