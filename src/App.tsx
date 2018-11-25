import React, { Component } from 'react';
import './App.css';
import { MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import Header from './components/typography/Header';
import { lightTheme, darkTheme } from './util/theme';
import NavBar from './components/NavBar/NavBar';
import { Switch, Route } from 'react-router';
import classNames from 'classnames';
import { inject, observer } from 'mobx-react';
import RootStore from './stores/RootStore';
import Home from './pages/Home/Home';

const drawerWidth = 240;

const styles = (theme: any) => ({
  content: {
    flexGrow: 1,
    // padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
});

interface Props {
  classes?: any,
  theme?: any,
}

interface InjectedProps extends Props {
  rootStore: RootStore
}

@inject('rootStore')
@observer
class App extends React.Component<Props> {

  get injected() {
    return this.props as InjectedProps;
  }

  render() {

    const { classes } = this.props;
    const { rootStore } = this.injected;
    const navBarStore = rootStore.navBarStore;
    const { showDrawer } = navBarStore;

    return (
      <div>
        <MuiThemeProvider theme={lightTheme}>
          <div style={{display: 'flex'}}>
            <NavBar/>
            <main
              className={classNames(classes.content, {
                [classes.contentShift]: showDrawer,
              })}
            >
              <div className={classes.drawerHeader} />
                <Switch>
                  <Route exact={true} path='/' component={Home}/>
                </Switch>
            </main>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(App);
