import { observable, action, computed } from 'mobx';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';

import NavBarStore from '../components/NavBar/NavBarStore';
import HomeStore from '../pages/Home/HomeStore';
import ViewTypeStore from './ViewTypeStore';

const routerStore = new RouterStore();

export default class RootStore {

    routerStore = routerStore;
    navBarStore: NavBarStore;
    homeStore: HomeStore;
    viewTypeStore: ViewTypeStore;

    constructor() {
        this.navBarStore = new NavBarStore(this);
        this.homeStore = new HomeStore(this);
        this.viewTypeStore = new ViewTypeStore(this);
    }
}
