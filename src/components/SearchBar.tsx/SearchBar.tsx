import * as React from 'react';
import Downshift from 'downshift';
import { TextField, withStyles, Paper, MenuItem, Typography, FormControl, InputLabel, Input, InputAdornment, IconButton } from '@material-ui/core';
import styled from 'styled-components';
import { PaperProps } from '@material-ui/core/Paper';
import { inject, observer } from 'mobx-react';
import RootStore from '../../stores/RootStore';
import { BASE_REF } from '../../util/config';
import ArcanaIcon from '../ArcanaCell/ArcanaIcon';
import Clear from '@material-ui/icons/Clear';

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

    textInput: any

    get injected() {
        return this.props as InjectedProps;
    }

    constructor(props: Props) {
        super(props);
        this.textInput = React.createRef();
    }

    componentDidMount() {
        // BASE_REF.child('arcana').once('value', snapshot => {
        //     if (snapshot) {
        //         let searchArray: any = {};
        //         snapshot.forEach((child) => {
        //             const key = child.key;
        //             const arcana = child.val();
        //             const searchArcana = {
        //                 nameKR: arcana.nicknameKR + ' ' + arcana.nameKR,
        //                 iconURL: arcana.iconURL || '',
        //                 imageURL: arcana.imageURL || '',
        //             }
        //             searchArray[key!] = searchArcana;
        //         });

        //         BASE_REF.child('search').set(searchArray);
        //     }
        // })
    }

    observeNames = () => {

        const { rootStore } = this.injected;
        const navBarStore = rootStore.navBarStore;
    
        BASE_REF.child('search').once('value', snapshot => {
    
            let namesArray: any = [];
            if (snapshot) {
                snapshot.forEach((child) => {
                    const key = child.key;
                    if (key) {
                        const arcana = child.val();
                        const searchArcana = {
                            arcanaID: key,
                            nameKR: arcana.nameKR,
                            iconURL: arcana.iconURL,
                            imageURL: arcana.imageURL,
                        }
                        namesArray.push(searchArcana);
                    }

                })
            }
            navBarStore.setNamesArray(namesArray);

        });
    }

    render() {

        const { rootStore } = this.injected;
        const navBarStore = rootStore.navBarStore;
        const { searchText, showSuggestions } = navBarStore;

        return (
            <div
                style={{flexGrow: 1, maxWidth: '300px'}}
            >
                <Downshift
                    onSelect={(selectedItem: any, stateAndHelpers: object) => {
                        const arcanaID = selectedItem.arcanaID;
                        this.textInput.current.blur();
                        navBarStore.showArcana(arcanaID);
                    }}
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
                                <FormControl fullWidth={true}>
                                    <Input
                                        inputRef={this.textInput}
                                        placeholder='이름 검색'
                                        value={navBarStore.searchText}
                                        onFocus={() => {
                                            this.observeNames();
                                            navBarStore.setShowSuggestions(true);
                                        }}
                                        onBlur={() => 
                                            navBarStore.setShowSuggestions(false)
                                        }
                                        onChange={(e: any) => {     
                                            navBarStore.setSearchText(e.target.value);
                                        }}
                                        endAdornment={
                                            searchText !== '' &&
                                            <InputAdornment position="end">
                                                <IconButton
                                                aria-label="지우기"
                                                onClick={() => {
                                                    navBarStore.clearSearchText();
                                                    this.textInput.current.focus()
                                                }}
                                                >
                                                    <Clear/>
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                    </FormControl>
                                <div {...getMenuProps()}>
                                {
                                    (showSuggestions && searchText !== '') &&
                                    <StyledPaper
                                        square
                                    >
                                        {navBarStore.getSearchResults().map((item: any, index) =>
                                            <MenuItem
                                                {...getItemProps({
                                                key: item.arcanaID,
                                                index,
                                                item,
                                                style: {
                                                    height: '100%', paddingTop: 0, paddingBottom: 0
                                                },
                                              })}                                                
                                            >
                                                <ArcanaIcon src={item.iconURL}/>
                                                <Typography>{item.nameKR}</Typography>
                                            </MenuItem>
                                        )}                            
                                    </StyledPaper>
                                }
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