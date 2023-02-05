import {
  Theme,
  ThemeContext,
  LOCAL_STORAGE_THEME_KEY,
} from '../ui/ThemeContext';
import { useContext } from 'react';

interface useThemContextResult {
  theme: Theme;
  toggleTheme: () => void;
}

export const useTheme = (): useThemContextResult => {
  const { theme, setTheme } = useContext(ThemeContext);
  const toggleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };
  return {
    theme,
    toggleTheme,
  };
};
