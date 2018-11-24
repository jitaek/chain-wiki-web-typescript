import * as React from 'react';
import { Link, withRouter } from "react-router-dom";
import { AppBar, Toolbar, IconButton, MuiThemeProvider, SvgIcon, Button, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { greenColor } from '../../util/theme';
import { createMuiTheme } from '@material-ui/core/styles';
import Logo from '../../logo.png';
import styled from 'styled-components';
import { ButtonProps } from '@material-ui/core/Button';

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

class NavBar extends React.Component {

  render() {
    return (
      <MuiThemeProvider theme={navBarTheme}>
          <AppBar>
              <Toolbar>
                  <IconButton
                    style={{
                      marginLeft: -12,
                    }}
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
      </MuiThemeProvider>
    );
  }
}

export default NavBar;