import React from 'react';

/**
 * useTheme
 */
const DARK = 'dark';
const LIGHT = 'light';

export type ThemeType = typeof DARK | typeof LIGHT;

export interface ThemeProviderComponentProps {
  children: JSX.Element;
}
export type ThemeProviderComponentType = React.FC<ThemeProviderComponentProps>;

export interface UseThemeObject {
  theme: ThemeType;
  setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
}
export type UseThemeAction = () => {
  theme: ThemeType;
  swapTheme: () => void;
};

/**
 * useScroller
 */
const SCROLL_TOP = 'top';
const SCROLL_MIDDLE = 'middle';
const SCROLL_BOTTOM = 'bottom';

export type ScrollPosiitonType =
  | typeof SCROLL_BOTTOM
  | typeof SCROLL_MIDDLE
  | typeof SCROLL_TOP;

export interface UseScrollerObject {
  currentScrollAt: ScrollPosiitonType;
}

export type UseScrollerAction = () => UseScrollerObject;
