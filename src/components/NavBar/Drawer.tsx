import * as React from 'react';
import { Drawer, IconButton, withStyles, Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { DrawerProps } from '@material-ui/core/Drawer';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

interface Props extends DrawerProps {
    open: boolean,
    handleDrawerClose: () => void,
}

const SideDrawer = (props: Props) => {

    return (
        <Drawer
            className={props.className}
            variant="persistent"
            anchor="left"
            open={props.open}
            classes={props.classes}
        >
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '8px 8px',
                    justifyContent: 'flex-end',
                }}
            >
                <IconButton
                    onClick={props.handleDrawerClose}
                >
                <ChevronRightIcon />
                </IconButton>
            </div>
            <Divider/>
            <List>
            {['아르카나', '필터', '어빌리티', '주점'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
            </List>

        </Drawer>
    );
  }
  
export default SideDrawer;
