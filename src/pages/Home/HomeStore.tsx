import { observable, action, computed } from 'mobx';
import RootStore from '../../stores/RootStore';
import { FUNCTIONS } from '../../util/config';
import * as queryString from 'query-string';

export enum ArcanaTab {
    REWARD,
    FESTIVAL,
    RECENT,
    LEGEND,
    ABYSSAL
};
export default class HomeStore {

    rootStore: RootStore;
    @observable selectedTab: ArcanaTab = ArcanaTab.REWARD;
    @observable rewardArray: Array<any> = [];
    @observable festivalArray: Array<any> = [];
    @observable recentArray: Array<any> = [];
    @observable legendArray: Array<any> = [];
    @observable abyssalArray: Array<any> = [];

    @observable lastArcanaIDKey: string | undefined;

    @action showArcana = (arcanaID: string) => {
        this.rootStore.routerStore.push(`arcana?arcana=${arcanaID}`);
    }

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
    }

    @action parseIndex = () => {
        const parsedQuery = queryString.parse(location.search);
        const queryIndex = parsedQuery.index;
        if (queryIndex) {
            let indexString: string;
            if (queryIndex instanceof Array && (queryIndex.length > 0)) {
                indexString = queryIndex[0];
            }
              else {
                indexString = queryIndex as string;
            }
            const index = parseInt(indexString);
            this.setSelectedTab(index);
        }
    }

    @action setSelectedTab = (selectedTab: ArcanaTab) => {
        this.selectedTab = selectedTab;
        this.rootStore.routerStore.push(`?index=${selectedTab}`)
    }

    @action fetchArcana = () => {
        this.fetchRewardArcana();
        this.fetchFestivalArcana();
        this.fetchRecentArcana();
        this.fetchLegendArcana();
        this.fetchAbyssalArcana();
    }

    @action fetchRewardArcana = () => {
        const fetch = FUNCTIONS.httpsCallable('rewardArcana');
        fetch().then(result => {
            const fetchedArray = result.data;
            this.rewardArray = fetchedArray;
        })
    }

    @action fetchFestivalArcana = () => {
        const fetch = FUNCTIONS.httpsCallable('festivalArcana');
        fetch().then(result => {
            const fetchedArray = result.data;
            this.festivalArray = fetchedArray;
        })
    }

    @action fetchRecentArcana = (limit?: number) => {

        const params = {
            offset: this.lastArcanaIDKey,
            limit: 20
        };
        const recentArcana = FUNCTIONS.httpsCallable('recentArcana');
        recentArcana(params).then(result => {
            const fetchedArray = result.data;
            this.recentArray = this.recentArray.concat(fetchedArray);
            this.lastArcanaIDKey = this.recentArray[this.recentArray.length - 1].uid;
        }).catch(error => {
            console.log(error);
        })
    }

    @action fetchLegendArcana = () => {
        const fetch = FUNCTIONS.httpsCallable('legendArcana');
        fetch().then(result => {
            const fetchedArray = result.data;
            this.legendArray = fetchedArray;
        })
    }

    @action fetchAbyssalArcana = () => {
        const fetch = FUNCTIONS.httpsCallable('abyssalArcana');
        fetch().then(result => {
            const fetchedArray = result.data;
            this.abyssalArray = fetchedArray;
        })
    }

}
