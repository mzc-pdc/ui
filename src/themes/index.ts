import { createTheme, ThemeOptions } from '@mui/material/styles';
import { typography } from './typography';
import { palette } from './palette';
import { ButtonTheme, IconButtonTheme } from '../components';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true;
  }
}
export const defaultTheme: ThemeOptions = {
  breakpoints: {
    keys: [`xs`, `sm`, `md`, `lg`, `xl`, `xxl`],
    values: {
      xs: 0,
      sm: 600,
      md: 840,
      lg: 1024,
      xl: 1280,
      xxl: 1440,
    },
  },
  palette,
  typography,
  spacing: 4,
};

export const overrideTheme = {
  ...defaultTheme,
  components: {
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          '.MuiBackdrop-root': {
            backgroundColor: `rgba(0, 0, 0, 0.2)`,
          },
          '.MuiInputBase-root': {
            paddingTop: 3,
            paddingBottom: 3,
          },
          '.MuiButtonBase-root': {
            border: 0,
          },
        },
        popper: {
          '.MuiPaper-root > .MuiAutocomplete-listbox': {
            maxHeight: `none`,
          },
          '.MuiAutocomplete-paper': {
            maxHeight: 350,
            '&:has(.MuiAutocomplete-noOptions)': {
              height: `auto`,
            },
          },
          '.MuiAutocomplete-groupLabel': {
            height: 37,
            fontSize: 12,
            color: `#999`,
          },
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        root: {
          '.MuiBackdrop-root': {
            backgroundColor: `rgba(0, 0, 0, 0.2)`,
          },
          '.MuiPaper-root': {
            marginTop: 4,
            '& > .MuiList-root': {
              padding: `24px 20px !important`,
              width: `100%`,
              boxSizing: `border-box`,
            },
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          padding: `12px 16px`,
          borderRadius: 6,
          '&:hover': {
            backgroundColor: `#f5f5f5`,
            '&.active': {
              backgroundColor: `transparent`,
            },
          },
          '.icon': {
            width: 24,
            height: 24,
            marginRight: 16,
          },
        },
      },
    },
    MuiIconButton: {
      ...IconButtonTheme(defaultTheme),
    },
    MuiButton: {
      ...ButtonTheme(defaultTheme),
    },
    MuiCssBaseline: {
      styleOverrides: () => ({}),
    },
  },
};
// Create a theme instance.
export const theme = createTheme(overrideTheme);

// process.env.NODE_ENV !== `production` &&
//   console.log(theme, '===================theme');
