import * as React from 'react';
import { Tabs, Tab } from '@material-ui/core';
import styled from '../../util/styled-components';
import { TabProps } from '@material-ui/core/Tab';
import SwipeableViews from 'react-swipeable-views';
import ArcanaList from '../ArcanaList/ArcanaList';

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
    recentArray: any[];
}

class HomeTab extends React.Component<Props> {

    state = {
        value: 0
    };

    handleChange = (event: any, value: any) => {
        this.setState({ value });
    };

    handleChangeIndex = (index: number) => {
        this.setState({ value: index });
    };

    render() {
        return (
            <div>
                <Tabs
                    value={this.state.value}
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
                    index={this.state.value}
                    onChangeIndex={this.handleChangeIndex}
                >
                    <ArcanaList
                        arcanaArray={this.props.rewardArray}
                    />
                    <ArcanaList
                        arcanaArray={this.props.rewardArray}
                    />
                    <ArcanaList
                        arcanaArray={this.props.recentArray}
                    />
                </SwipeableViews>
            </div>
        );
    }
}

export default HomeTab;