import { observable, action, computed } from 'mobx';
import RootStore from './RootStore';
import { ViewType } from '../components/ViewTypeMenu/ViewType';

export default class ViewTypeStore {

    rootStore: RootStore;
    @observable viewType: ViewType;// = ViewType.Grid;
    @observable showMenu = false;

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
        const localViewType = localStorage.getItem('viewType');
        if (localViewType) {
            const value = parseInt(localViewType);
            this.viewType = value;
        }
        else {
            this.viewType = ViewType.Grid;
        }
    }

    @action setViewType = (viewType: ViewType) => {
        this.viewType = viewType;
        const localViewType = viewType.toString();
        localStorage.setItem('viewType', localViewType);
    }

    @action toggleShowMenu = () => {
        this.showMenu = !this.showMenu;
    }
}
