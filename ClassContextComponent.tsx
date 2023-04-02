import * as React from 'react';
import { ThemeContext } from './App';

export default class ClassContextComponent extends React.Component {
  themStyles(dark) {
    return {
      backgroundColor: dark ? '#333' : '#ccc',
      color: dark ? '#ccc' : '#333',
      padding: '2rem',
      margin: '2rem',
    };
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {(darkTheme) => {
          return <div style={this.themStyles(darkTheme)}>Class Theme</div>;
        }}
      </ThemeContext.Consumer>
    );
  }
}
