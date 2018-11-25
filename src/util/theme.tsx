import { createMuiTheme } from '@material-ui/core/styles';

export const greenColor = '#68a283';
export const lightGrayColor = '#F7F7F7';
export const lightGrayTextColor = '#68a283';
export const blackColor = '#000000';
// export const grayTextColor = '#aab2bd';
// export const grayBackgroundColor = '#F5F7FA';
// export const charcoalGrayColor = '#434a54';
// export const azulColor = '#217ce6';
// export const COLlightGreenColor = '#E1F1E9';
// export const COLdarkGreenColor = '#2abb4f';
// export const errorRedColor = '#ed5040';

export interface ThemeInterface {
    primaryColor: string;
    primaryColorInverted: string;
    palette: any;
};

export interface LightThemeInterface extends ThemeInterface {

};
export const lightTheme = createMuiTheme({
    palette: {
        primary: {
            main: greenColor
        },
        secondary: {
            main: blackColor
        },
    },
    typography: {
        useNextVariants: true,
    },
});

export interface DarkThemeInterface extends ThemeInterface {

};
export const darkTheme = createMuiTheme({
    palette: {
        secondary: {
            main: '#000000',
        },
        type: 'dark'
    },
    typography: {
        useNextVariants: true,
    },
});