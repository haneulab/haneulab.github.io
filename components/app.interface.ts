import React, { Dispatch, SetStateAction } from 'react';
import {
  LanguageContextType,
  ThemeContextType,
} from './contexts/context.interface';

/**
 * LayoutProps & Type
 */
export interface LayoutProps {
  setters: {
    setTheme: Dispatch<SetStateAction<ThemeContextType>>;
    setLanguage: Dispatch<SetStateAction<LanguageContextType>>;
  };
  children: JSX.Element;
}
export type LayoutComponentType = React.FC<LayoutProps>;

export interface HeaderProps {
  scrollLeave: boolean;
  setTheme: Dispatch<SetStateAction<ThemeContextType>>;
}
export type HeaderComponentType = React.FC<HeaderProps>;
export interface ThemeNavProps {
  setTheme: Dispatch<SetStateAction<ThemeContextType>>;
}
export type ThemeNavComponentType = React.FC<ThemeNavProps>;

export interface MobileGroundBarProps {
  scrollBottom: boolean;
  setLanugage: Dispatch<SetStateAction<LanguageContextType>>;
}
export type MobileGroundBarComponentType = React.FC<MobileGroundBarProps>;
export interface MobileNavTogglerProps {
  className: string;
  onClickMobileToggle: () => void;
}
export type MobileNavTogglerComponentType = React.FC<MobileNavTogglerProps>;

/**
 * IndexPage Component Props & Type
 */
export interface ExpertiseCardProps {
  title: string;
  icon: JSX.Element;
}
export type ExpertiesCardComponentType = React.FC<ExpertiseCardProps>;
