import * as React from 'react';
import Downshift from 'downshift';
import { TextField, withStyles, Paper, MenuItem } from '@material-ui/core';
import styled from 'styled-components';
import { PaperProps } from '@material-ui/core/Paper';
import { inject, observer } from 'mobx-react';
import RootStore from '../../stores/RootStore';
import { BASE_REF } from '../../util/config';

const StyledPaper = styled(Paper as React.SFC<PaperProps>)`
    position: absolute;
    margin-top: 16px;
    z-index: 1;
    left: 0;
    right: 0;
`;

interface Props {

}

interface InjectedProps extends Props {
    rootStore: RootStore
}

@inject('rootStore')
@observer
class SearchBar extends React.Component<Props> {

    get injected() {
        return this.props as InjectedProps;
    }

    observeNames = () => {

        const { rootStore } = this.injected;
        const navBarStore = rootStore.navBarStore;
    
        BASE_REF.child('name').once('value', snapshot => {
    
            let namesArray: any = [];
            if (snapshot) {
                snapshot.forEach((child) => {
                    const arcana = {
                        arcanaID: child.key,
                        nameKR: child.val()
                    }
                    namesArray.push(arcana);
                })
            }
            navBarStore.setNamesArray(namesArray);

        });
    }

    render() {

        const { rootStore } = this.injected;
        const navBarStore = rootStore.navBarStore;
        const { searchText } = navBarStore;

        return (
            <div
                style={{flexGrow: 1}}
            >
                <Downshift
                >
                    {({
                        getInputProps,
                        getItemProps,
                        getLabelProps,
                        getMenuProps,
                        // isOpen,
                        inputValue,
                        highlightedIndex,
                        selectedItem,
                        }) => (
                            <div>
                                <TextField
                                    placeholder='이름 검색'
                                    fullWidth={true}
                                    onFocus={this.observeNames}
                                    onChange={(e: any) => {     
                                        navBarStore.setSearchText(e.target.value);
                                    }}

                                />
                                <div {...getMenuProps()}>
                                {navBarStore.showAutoComplete ? (
                                    <StyledPaper
                                        square
                                    >
                                        {navBarStore.getSearchResults().map((arcana: any) =>
                                            <MenuItem>
                                            {arcana.nameKR}
                                            </MenuItem>
                                        )}                            
                                    </StyledPaper>
                                ) : null}
                                </div>
                            </div>
                        )
                    }
                </Downshift>
            </div>
        );
    }
}

export default SearchBar;