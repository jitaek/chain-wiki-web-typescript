import * as React from 'react';
import { Link, withRouter } from "react-router-dom";
import { AppBar, Toolbar, IconButton, MuiThemeProvider, SvgIcon, Button, Typography, withStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { greenColor } from '../../util/theme';
import { createMuiTheme } from '@material-ui/core/styles';
import Logo from '../../logo.png';
import styled from 'styled-components';
import { ButtonProps } from '@material-ui/core/Button';
import Drawer from './Drawer';
import classNames from 'classnames';

const navBarTheme = createMuiTheme({
  palette: {
      primary: {
          main: '#FFFFFF'
      },
      secondary: {
          main: greenColor
      },
  },
  typography: {
      useNextVariants: true,
  },
});

const HomeButton = styled(Button as React.SFC<ButtonProps>)`
  && {
    &:hover {
      background-color: white;
    }
  }
`;

const HomeLink = (props:any)  => <Link to="/" {...props} />

const drawerWidth = 240;

const styles = (theme: any) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
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
});

interface Props {
  classes?: any,
  theme?: any,
}
class NavBar extends React.Component<Props> {

  state = {
    open: true
  }

  handleDrawerClose = () => {
    this.setState({
      open: false
    });
  }

  handleDrawerOpen = () => {
    this.setState({
      open: true
    });
  }

  render() {

    const { classes, theme } = this.props;
    const { open } = this.state;

    return (
      <MuiThemeProvider theme={navBarTheme}>
          <AppBar
            position="fixed"
            className={classNames(classes.appBar, {
              [classes.appBarShift]: open,
            })}
          >
              <Toolbar>
                  <IconButton
                    style={{
                      marginLeft: -12,
                    }}
                    onClick={this.handleDrawerOpen}
                  >
                    <MenuIcon color='secondary'/>
                  </IconButton>
                  <HomeButton
                    component={HomeLink}
                  >
                    <img src={Logo} style={{width: '40px', height: '40px'}}/>
                    <Typography style={{marginLeft: '8px', fontSize: '22px', fontWeight:600}}>위키</Typography>
                  </HomeButton>
              </Toolbar>
          </AppBar>
          <Drawer
            className={classes.drawer}
            open={open}
            handleDrawerClose={this.handleDrawerClose}
            classes={{
              paper: classes.drawerPaper,
            }}
          />
      </MuiThemeProvider>
    );
  }
}
export default withStyles(styles, { withTheme: true })(NavBar);