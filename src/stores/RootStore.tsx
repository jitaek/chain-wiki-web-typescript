import { observable, action, computed } from 'mobx';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';

import NavBarStore from '../components/NavBar/NavBarStore';

const routerStore = new RouterStore();

export default class RootStore {

    routerStore = routerStore;
    navBarStore: NavBarStore;

    constructor() {
        this.navBarStore = new NavBarStore(this);
    }
}
