import { observable, action, computed } from 'mobx';
import RootStore from '../../stores/RootStore';

export default class NavBarStore {

    rootStore: RootStore;
    
    @observable showDrawer = false;

    @action setDrawerClose = () => {
        this.showDrawer = false;
    }
    
    @action setDrawerOpen = () => {
        this.showDrawer = true;
    }
    
    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
    }

}
