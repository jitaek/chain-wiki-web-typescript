import { observable, action, computed } from 'mobx';
import RootStore from '../../stores/RootStore';

export default class NavBarStore {

    rootStore: RootStore;
    
    @observable showDrawer = false;

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
    }

}
