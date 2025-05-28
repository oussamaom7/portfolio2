import { createContext, useContext } from 'react';

export const ThemeContext = createContext({
  isDarkTheme: false,
  toggleTheme: () => {},
});

export const useThemeContext = () => useContext(ThemeContext);
