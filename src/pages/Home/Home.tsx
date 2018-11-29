import * as React from 'react';
import ArcanaCell from '../../components/ArcanaCell/ArcanaCell';
import ArcanaList from '../../components/ArcanaList/ArcanaList';
import HomeTab from '../../components/Tabs/HomeTab';
import { inject, observer } from 'mobx-react';
import RootStore from '../../stores/RootStore';
let mockDecks = require('../../components/ArcanaCell/decks.json');

interface Props {

}

interface InjectedProps {
    rootStore: RootStore
}
@inject('rootStore')
@observer
export default class Home extends React.Component<Props> {

    get injected() {
        return this.props as InjectedProps;
    }

    render() {

        const { rootStore } = this.injected;
        const { homeStore } = rootStore;
        const { rewardArray, festivalArray, recentArray, legendArray, abyssalArray } = homeStore;
        
        return (
            <div>
                <HomeTab
                    rewardArray={mockDecks[0].arcana.main}
                />
            </div>
        );
    }

}