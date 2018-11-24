import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Header from './components/typography/Header';
import { lightTheme, darkTheme } from './util/theme';

class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider theme={lightTheme}>
        <div>
          <Header>HEADER</Header>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
