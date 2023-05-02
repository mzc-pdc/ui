import { Color } from '@mui/material';
import {
  red,
  green,
  yellow,
  grey,
  pink,
  blue,
  orange,
  brown,
  indigo,
} from '@mui/material/colors';
import {
  createTheme,
  ThemeOptions,
  PaletteColorOptions,
  PaletteOptions,
} from '@mui/material/styles';
import { ButtonTheme } from '../components/button/ButtonTheme';

declare module '@mui/material/styles' {
  interface Palette {
    default: PaletteColor & Color;
    grayscale: Color & PaletteColor;
    black: Color & PaletteColor;
    red: Color & PaletteColor;
    blue: Color & PaletteColor;
    brown: Color & PaletteColor;
    green: Color & PaletteColor;
    pink: Color & PaletteColor;
    yellow: Color & PaletteColor;
    orange: Color & PaletteColor;
    indigo: Color & PaletteColor;
    logo: {
      [key: string]: string;
    };
  }
  interface PaletteOptions {
    default: PaletteColorOptions;
    grayscale: PaletteColorOptions;
    black: PaletteColorOptions;
    red: PaletteColorOptions;
    blue: PaletteColorOptions;
    brown: PaletteColorOptions;
    green: PaletteColorOptions;
    pink: PaletteColorOptions;
    yellow: PaletteColorOptions;
    orange: PaletteColorOptions;
    indigo: PaletteColorOptions;
    logo: {
      [key: string]: string;
    };
  }

  interface PaletteColor {
    darker?: string;
    A700: string;
    A400: string;
    A200: string;
    A100: string;
    900: string;
    800: string;
    700: string;
    600: string;
    500: string;
    400: string;
    300: string;
    200: string;
    100: string;
    50: string;
  }
  interface SimplePaletteColorOptions {
    darker?: string;
  }
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true;
  }
}

export const palette: PaletteOptions = {
  mode: 'light',
  common: {
    black: '#000000',
    white: '#FFFFFF',
  },
  default: {
    900: '#000000',
    800: '#303637',
    700: '#53575d',
    600: '#666a71',
    500: '#91959a',
    400: '#b1b5ba',
    300: '#d5d9de',
    200: '#e4e9ee',
    100: '#f1f4f6',
    50: '#f6f8f9',
    main: '#c3cbd4',
    contrastText: '#ffffff',
  },
  primary: {
    A700: '#2E2E31',
    A400: '#87878F',
    A200: '#BEC0C9',
    A100: '#D1D2D9',
    900: '#080808',
    800: '#171717',
    700: '#333333',
    600: '#666666',
    500: '#7C7C7C',
    400: '#999999',
    300: '#B4B4B4',
    200: '#CCCCCC',
    100: '#DEDEDE',
    50: '#F5F5F5',
    main: '#171717',
    light: '#7C7C7C',
    dark: '#080808',
    contrastText: '#ffffff',
  },
  secondary: {
    A700: '#18315B',
    A400: '#274882',
    A200: '#6A8CC9',
    A100: '#94ACD5',
    900: '#1A273D',
    800: '#20304B',
    700: '#263959',
    600: '#2C4166',
    500: '#324A74',
    400: '#3E5B8F',
    300: '#6182BB',
    200: '#8AA2CD',
    100: '#B3C3DE',
    50: '#EAEEF6',
    main: '#263959',
    light: '#3E5B8F',
    dark: '#20304B',
    contrastText: '#ffffff',
  },
  grayscale: {
    A700: '#565960',
    A400: '#9DA2AA',
    A200: '#D9DDE3',
    A100: '#E6E9EF',
    900: '#232527',
    800: '#363841',
    700: '#43444B',
    600: '#5A5C60',
    500: '#696B72',
    400: '#96989B',
    300: '#AFB1B5',
    200: '#CBCDD3',
    100: '#E0E2E5',
    50: '#F3F5F8',
    main: '#586176',
    light: '#7B8497',
    dark: '#353C4A',
    contrastText: '#ffffff',
  },
  success: {
    900: '#005800',
    800: '#0f7600',
    700: '#218701',
    600: '#2e9812',
    500: '#39a71c',
    400: '#59b445',
    300: '#78c167',
    200: '#9fd193',
    100: '#c5e3bd',
    50: '#e7f4e4',
    main: '#2e9812',
  },
  warning: {
    900: '#e65100',
    800: '#ef6c00',
    700: '#f57c00',
    600: '#fb8c00',
    500: '#ff9800',
    400: '#ffa726',
    300: '#ffb74d',
    200: '#ffcc80',
    100: '#ffe0b2',
    50: '#fff3e0',
    main: '#f57c00',
    contrastText: '#ffffff',
  },
  error: {
    900: '#b71c1c',
    800: '#c62828',
    700: '#d32f2f',
    600: '#e53935',
    500: '#f44336',
    400: '#ef5350',
    300: '#e57373',
    200: '#ef9a9a',
    100: '#ffcdd2',
    // 50: '#ffebee',
    50: '#fff5f3',
    main: '#ed4040',
  },
  grey: {
    ...grey,
  },
  black: {
    A700: '#18315B',
    A400: '#274882',
    A200: '#6A8CC9',
    A100: '#94ACD5',
    900: '#212429',
    800: '#35393e',
    700: '#53575d',
    600: '#666a71',
    500: '#91959a',
    400: '#b1b5ba',
    300: '#d5d9de',
    200: '#e4e9ee',
    100: '#f1f4f6',
    50: '#fafbfb',
    main: '#101717',
    light: '#b1b5ba',
    dark: '#35393e',
    contrastText: '#ffffff',
  },
  red: {
    ...red,
    main: red[500],
    light: red[200],
    dark: red[700],
    contrastText: '#ffffff',
  },
  blue: {
    ...blue,
    main: blue[500],
    light: blue[200],
    dark: blue[700],
    contrastText: '#ffffff',
  },
  green: {
    ...green,
    main: green[500],
    light: green[200],
    dark: green[700],
    contrastText: '#ffffff',
  },
  yellow: {
    ...yellow,
    50: '#fffbef',
    main: yellow[500],
    light: yellow[200],
    dark: yellow[700],
    contrastText: '#ffffff',
  },
  pink: {
    ...pink,
    main: pink[500],
    light: pink[200],
    dark: pink[700],
    contrastText: '#ffffff',
  },
  brown: {
    ...brown,
    main: brown[500],
    light: brown[200],
    dark: brown[700],
    contrastText: '#ffffff',
  },
  orange: {
    ...orange,
    main: orange[500],
    light: orange[200],
    dark: orange[700],
    contrastText: '#ffffff',
  },
  indigo: {
    ...indigo,
    main: indigo[500],
    light: indigo[200],
    dark: indigo[700],
    contrastText: '#ffffff',
  },
  logo: {
    purple: `#9381E9`,
    darkGreen: `#69B8B7`,
    grayscale: `#919AAA`,
    red: `#E57373`,
    pink: `#F06292`,
    indigo: `#7886CB`,
    blue: `#64B5F6`,
    green: `#81C784`,
    orange: `#FF8A65`,
    brown: `#A1887F`,
  },
  text: {
    primary: '#000000',
    secondary: '#55595E',
    disabled: '#B1B5BA',
  },
  divider: '#dbe0e5',
  background: {
    default: '#F3F4F8',
    paper: '#FFFFFF',
  },
  action: {
    active: 'rgba(0, 0, 0, 0.54)',
    hover: 'rgba(0, 0, 0, 0.4)',
    hoverOpacity: 0.04,
    selected: 'rgba(0, 0, 0, 0.08)',
    selectedOpacity: 0.08,
    disabled: 'rgba(0, 0, 0, 0.26)',
    disabledBackground: 'rgba(0, 0, 0, 0.12)',
    disabledOpacity: 0.38,
    focus: 'rgba(0, 0, 0, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.12,
  },
};

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
  typography: {
    fontFamily: `Noto Sans, -apple-system , Malgun Gothic, sans-serif , Apple SD Gothic Neo`,
    htmlFontSize: 16,
    fontSize: 14,
    h1: {
      fontWeight: 'bold',
      fontSize: 24,
    },
    h2: {
      fontWeight: 'bold',
      fontSize: 20,
    },
    h3: {
      fontWeight: 'bold',
      fontSize: 18,
    },
    h4: {
      fontWeight: 'bold',
      fontSize: 16,
    },
    h5: {
      fontWeight: 'bold',
      fontSize: 15,
    },
    subtitle1: {
      fontWeight: 'bold',
      fontSize: 15,
    },
    subtitle2: {
      fontWeight: 'bold',
      fontSize: 14,
    },
    body1: {
      fontWeight: 'normal',
      fontSize: 13,
    },
    body2: {
      fontWeight: 'normal',
      fontSize: 12,
    },
    caption: {
      fontWeight: 'normal',
      fontSize: 11,
    },
  },
  mixins: {
    toolbar: {
      minHeight: `56px`,
    },
  },
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
      styleOverrides: {
        root: {
          padding: 10,
        },
      },
    },
    MuiButton: {
      ...ButtonTheme(palette),
    },
    MuiCssBaseline: {
      styleOverrides: () => ({
        body: {
          width: 400,
          backgroundColor: `#fff`,
        },
      }),
    },
  },
};
// Create a theme instance.
export const theme = createTheme(defaultTheme);

// process.env.NODE_ENV !== `production` &&
//   console.log(theme, '===================theme');
