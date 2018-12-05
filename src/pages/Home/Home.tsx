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

    componentWillMount() {

        const { rootStore } = this.injected;
        rootStore.homeStore.fetchArcana();

    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {

        const { rootStore } = this.injected;
        const { homeStore } = rootStore;
        let fetchedArcanaCount = homeStore.recentArray.length
        sessionStorage.setItem('fetchedArcanaCount', String(fetchedArcanaCount));
    
        window.removeEventListener("scroll", this.handleScroll)

      }

    handleScroll = () => {
        const d = document.documentElement;
        if (d) {
            const offset = d.scrollTop + window.innerHeight;
            const height = d.offsetHeight;
        
            const offsetY = window.pageYOffset    
            sessionStorage.setItem('scroll', String(offsetY));
            if (offset === height) {
                const { rootStore } = this.injected;
                rootStore.homeStore.fetchRecentArcana(20);
            }
        }

      }

    render() {

        const { rootStore } = this.injected;
        const { homeStore } = rootStore;
        const { rewardArray, festivalArray, recentArray, legendArray, abyssalArray } = homeStore;

        return (
            <div>
                <HomeTab
                    rewardArray={homeStore.rewardArray}
                    festivalArray={homeStore.festivalArray}
                    recentArray={homeStore.recentArray}
                    legendArray={homeStore.legendArray}
                    abyssalArray={homeStore.abyssalArray}
                />
            </div>
        );
    }

}