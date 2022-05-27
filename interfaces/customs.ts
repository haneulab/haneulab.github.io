import { Dispatch, SetStateAction } from 'react';

export interface ThemeBarProps {
  setTheme: Dispatch<SetStateAction<'dark' | 'light'>>;
}

export interface BoxWrapProps {
  className: string;
  element: JSX.Element;
}
export interface BoxProps {
  className: string;
  wrapper: JSX.Element;
}
