import * as React from 'react';
import { useTheme } from './ThemeContext';

export default function FunctionContextComponent() {
  const { darkTheme, toggleTheme } = useTheme();
  const themeStyle = {
    backgroundColor: darkTheme ? '#333' : '#ccc',
    color: darkTheme ? '#ccc' : '#333',
    padding: '2rem',
    margin: '2rem',
  };

  return (
    <React.Fragment>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div style={themeStyle}>Functional Component</div>
    </React.Fragment>
  );
}
