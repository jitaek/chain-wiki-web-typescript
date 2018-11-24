import React, { Component } from 'react';
import './App.css';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Header from './components/typography/Header';
import { lightTheme, darkTheme } from './util/theme';
import NavBar from './components/NavBar/NavBar';
import { Switch, Route } from 'react-router';

class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider theme={lightTheme}>
          <NavBar/>
          <Switch>
            <Route exact={true} path='/'/>
          </Switch>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
