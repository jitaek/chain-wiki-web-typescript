import * as React from 'react';
import ArcanaCell from '../../components/ArcanaCell/ArcanaCell';
let mockDecks = require('../../components/ArcanaCell/decks.json');

export default class Home extends React.Component {

    render() {
        return (
            <div>
                <ArcanaCell arcana={mockDecks[0].arcana.main[0]}/>
            </div>
        );
    }

}