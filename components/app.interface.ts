import React, { Dispatch, SetStateAction } from 'react';
import {
  LanguageContextType,
  ThemeContextType,
} from './contexts/context.interface';
import { ScrollActionState } from './app.scoll.interface';

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
  scrollLeave: ScrollActionState;
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
type ExpertiseType = 'design' | 'service' | 'price' | 'communication';
export interface ExpertiseCardListProps {
  setUIType: Dispatch<SetStateAction<ExpertiseType>>;
}
export type ExpertiseCardListComponentType = React.FC<ExpertiseCardListProps>;
export interface ExpertiseCardProps {
  type: ExpertiseType;
  title: string;
  icon: JSX.Element;
  setUIType: Dispatch<SetStateAction<ExpertiseType>>;
}
export type ExpertiesCardComponentType = React.FC<ExpertiseCardProps>;
export interface ExpertiseUIProps {
  setUIType: Dispatch<SetStateAction<ExpertiseType>>;
}
export type ExpertiseUIComponentType = React.FC<ExpertiseUIProps>;

type DeviceType = 'mobile' | 'desktop' | 'tablet';
export interface DeviceProps {
  type: DeviceType;
}
export type DeviceComponentType = React.FC<DeviceProps>;
export interface DeviceOptionsProp {
  setDeviceType: Dispatch<SetStateAction<DeviceType>>;
}
export type DeviceOptionsComponentType = React.FC<DeviceOptionsProp>;
export interface DeviceUIProps {
  deviceUIOpen: ExpertiseType;
}
export type DeviceUIComponentType = React.FC<DeviceUIProps>;
