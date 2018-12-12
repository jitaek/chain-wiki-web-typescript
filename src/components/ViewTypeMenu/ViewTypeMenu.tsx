import React from 'react'
import styled from 'styled-components';
import { MenuItem, Button, Menu, IconButton } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { ViewType } from './ViewType';
import { inject, observer } from 'mobx-react';
import RootStore from '../../stores/RootStore';

interface Props {

}

interface InjectedProps {
    rootStore: RootStore
}
@inject('rootStore')
@observer
class ViewTypeMenu extends React.Component<Props> {

    anchorEl: any

    get injected() {
        return this.props as InjectedProps;
    }

    handleToggle = () => {

        const { rootStore } = this.injected;
        rootStore.viewTypeStore.toggleShowMenu();

    };

    setViewType = (viewType: ViewType) => {

        const { rootStore } = this.injected;
        rootStore.viewTypeStore.setViewType(viewType);
        this.handleToggle();
    }

    render() {

        const { rootStore } = this.injected;
        const { viewTypeStore } = rootStore;

        return (
            <div>
                <IconButton
                    buttonRef={node => {
                        this.anchorEl = node;
                    }}
                    onClick={this.handleToggle}
                >
                    <DashboardIcon/>
                </IconButton>
                <Menu
                    open={viewTypeStore.showMenu}
                    anchorEl={this.anchorEl}
                    onClose={this.handleToggle}
                    >
                        <MenuItem
                            onClick={() => this.setViewType(ViewType.Grid)}
                        >
                        카드 보기
                        </MenuItem>
                        <MenuItem
                            onClick={() => this.setViewType(ViewType.List)}
                        >
                        리스트 보기
                        </MenuItem>
                </Menu>

            </div>
        );
    };

}

export default ViewTypeMenu;