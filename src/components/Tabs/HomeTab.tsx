import * as React from 'react';
import { Tabs, Tab } from '@material-ui/core';
import styled from '../../util/styled-components';
import { TabProps } from '@material-ui/core/Tab';
import SwipeableViews from 'react-swipeable-views';
import ArcanaList from '../ArcanaList/ArcanaList';
import RootStore from '../../stores/RootStore';
import { inject, observer } from 'mobx-react';

const StyledTab = styled(Tab as React.SFC<TabProps>)`
    && {
        font-size: 20px;
        font-weight: 600;
        color: black;
    }
`;

const CATEGORIES: string[] = ['보상', '페스티벌', '최신', '레전드', '천마'];

interface Props {
    rewardArray: any[];
    festivalArray: any[];
    recentArray: any[];
    legendArray: any[];
    abyssalArray: any[];
}

interface InjectedProps extends Props {
    rootStore: RootStore
}
@inject('rootStore')
@observer
class HomeTab extends React.Component<Props> {

    get injected() {
        return this.props as InjectedProps;
    }

    handleChange = (event: any, value: any) => {

        const { rootStore } = this.injected;
        const { homeStore } = rootStore;
        homeStore.setSelectedTab(value);

    };

    handleChangeIndex = (index: number) => {
        
        const { rootStore } = this.injected;
        const { homeStore } = rootStore;
        homeStore.setSelectedTab(index);

    };

    render() {

        const { rootStore } = this.injected;
        const { homeStore } = rootStore;

        return (
            <div>
                <Tabs
                    value={homeStore.selectedTab}
                    onChange={this.handleChange}
                    indicatorColor="primary"
                    fullWidth
                >
                    {CATEGORIES.map(category => 
                        <StyledTab
                            label={category}
                            disableRipple={true}
                        />
                    )}
                </Tabs>
                <SwipeableViews
                    index={homeStore.selectedTab}
                    onChangeIndex={this.handleChangeIndex}
                >
                    <ArcanaList
                        arcanaArray={this.props.rewardArray}
                    />
                    <ArcanaList
                        arcanaArray={this.props.festivalArray}
                    />
                    <ArcanaList
                        arcanaArray={this.props.recentArray}
                    />
                    <ArcanaList
                        arcanaArray={this.props.legendArray}
                    />
                    <ArcanaList
                        arcanaArray={this.props.abyssalArray}
                    />
                </SwipeableViews>
            </div>
        );
    }
}

export default HomeTab;