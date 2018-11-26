import { observable, action, computed } from 'mobx';
import RootStore from '../../stores/RootStore';

export default class NavBarStore {

    rootStore: RootStore;
    
    @observable showDrawer = false;
    @observable searchText = '';
    @observable namesArray = [];
    @observable showSuggestions = false;

    @action setDrawerClose = () => {
        this.showDrawer = false;
    }
    
    @action setDrawerOpen = () => {
        this.showDrawer = true;
    }

    @action setSearchText = (text: string) => {
        this.searchText = text;
    }

    @action clearSearchText = () => {
        this.searchText = '';
    }

    @action setShowSuggestions = (showSuggestions: boolean) => {
        this.showSuggestions = showSuggestions;
    }

    @action setNamesArray = (array: []) => {
        this.namesArray = array;
    }

    @action getSearchResults():Array<any> {

        let filteredArray = this.namesArray.filter((arcana: any) => {
            return arcana.nameKR.includes(this.searchText);
        });
        filteredArray = filteredArray.slice(0, 5);
        return filteredArray;
    }

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
    }

}
