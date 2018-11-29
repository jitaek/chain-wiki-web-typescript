import { observable, action, computed } from 'mobx';
import RootStore from '../../stores/RootStore';

export default class HomeStore {

    rootStore: RootStore;
    @observable rewardArray = [];
    @observable festivalArray = [];
    @observable recentArray = [];
    @observable legendArray = [];
    @observable abyssalArray = [];

    @action showArcana = (arcanaID: string) => {
        this.rootStore.routerStore.push(`arcana?arcana=${arcanaID}`);
    }

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
    }

}
