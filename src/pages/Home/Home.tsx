import * as React from 'react';
import ArcanaCell from '../../components/ArcanaCell/ArcanaCell';
import ArcanaList from '../../components/ArcanaList/ArcanaList';
import HomeTab from '../../components/Tabs/HomeTab';
let mockDecks = require('../../components/ArcanaCell/decks.json');

export default class Home extends React.Component {

    render() {
        return (
            <div>
                <HomeTab
                    rewardArray={mockDecks[0].arcana.main}
                />
            </div>
        );
    }

}