import { observable, action, computed } from 'mobx';
import RootStore from '../../stores/RootStore';
import { FUNCTIONS } from '../../util/config';

export default class HomeStore {

    rootStore: RootStore;
    @observable rewardArray = [];
    @observable festivalArray = [];
    @observable recentArray: Array<any> = [];
    @observable legendArray = [];
    @observable abyssalArray = [];

    @observable lastArcanaIDKey: string | undefined;

    @action showArcana = (arcanaID: string) => {
        this.rootStore.routerStore.push(`arcana?arcana=${arcanaID}`);
    }

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
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

}
