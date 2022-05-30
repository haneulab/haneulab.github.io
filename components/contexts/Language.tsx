import { createContext } from 'react';
import type { LanguageContextType } from './context.interface';

export const Language = createContext<LanguageContextType>('English');
