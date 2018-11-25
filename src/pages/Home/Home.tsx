import * as React from 'react';
import ArcanaCell from '../../components/ArcanaCell/ArcanaCell';
import ArcanaList from '../../components/ArcanaList/ArcanaList';
let mockDecks = require('../../components/ArcanaCell/decks.json');

export default class Home extends React.Component {

    render() {
        return (
            <div>
                <ArcanaList
                    arcanaArray={mockDecks[0].arcana.main}
                    viewType='list'
                />
            </div>
        );
    }

}