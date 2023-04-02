/**
 * Here we centerlized everything related to useContext
 * 1) state management; useState
 * 2) state manupulation; toggleTheme
 * 3) Wrap all the component into single a hood; {children}
 * 4) expose theme context by custom hook; useTheme
 * 5) Combined state with type safety;ThemeInterface
 */
import * as React from 'react';

interface ThemeInterface {
  darkTheme: boolean;
  toggleTheme(): void;
}

const ThemeContext = React.createContext<ThemeInterface>(undefined!);

export function useTheme() {
  return React.useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = React.useState(true);

  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  }

  return (
    <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
