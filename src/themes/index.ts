import { createTheme, ThemeOptions } from '@mui/material/styles';
import { typography } from './typography';
import { palette } from './palette';
import {
  ButtonTheme,
  IconButtonTheme,
  FilledInputTheme,
  FormHelperTextTheme,
  FormLabelTheme,
  OutlinedInputTheme,
  TextFieldTheme
} from '../components';

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
      xxl: 1440
    }
  },
  palette,
  typography,
  spacing: 4,
  shape: {
    borderRadius: 3,
  }
};

export const overrideTheme = {
  ...defaultTheme,
  components: {
    MuiButton: {
      ...ButtonTheme(defaultTheme),
    },
    MuiIconButton: {
      ...IconButtonTheme(defaultTheme),
    },
    MuiTextField: {...TextFieldTheme(defaultTheme),},
    MuiOutlinedInput: {...OutlinedInputTheme(defaultTheme),},
    MuiFilledInput: {...FilledInputTheme(defaultTheme),},
    MuiFormLabel: {...FormLabelTheme(defaultTheme),},
    MuiFormHelperText: {...FormHelperTextTheme(defaultTheme),},
    MuiCssBaseline: {
      styleOverrides: () => ({}),
    },
  },
};
// Create a theme instance.
export const theme = createTheme(overrideTheme);

// process.env.NODE_ENV !== `production` &&
//   console.log(theme, '===================theme');

