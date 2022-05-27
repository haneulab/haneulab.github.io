import { Dispatch, SetStateAction } from 'react';

export interface LayoutProps {
  setTheme: Dispatch<SetStateAction<'dark' | 'light'>>;
  children: JSX.Element;
}

export interface HeaderProps {
  ThemeBarComponent: JSX.Element;
}

export interface PageProps {
  children: JSX.Element;
}
