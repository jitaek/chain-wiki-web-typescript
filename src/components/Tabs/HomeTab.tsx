import * as React from 'react';
import { Tabs, Tab } from '@material-ui/core';
import styled from '../../util/styled-components';
import { TabProps } from '@material-ui/core/Tab';

const StyledTab = styled(Tab as React.SFC<TabProps>)`
    && {
        font-size: 20px;
        font-weight: 600;
        color: black;
    }
`;

const CATEGORIES: string[] = ['보상', '페스티벌', '최신', '레전드', '천마'];

interface Props {
    rewardArray: [];
}

class HomeTab extends React.Component<Props> {

    state = {
        value: 0
    };

    handleChange = (event: any, value: any) => {
        this.setState({ value });
    };

    render() {
        return (
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
        );
    }
}

export default HomeTab;