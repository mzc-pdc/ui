import {Color} from "@mui/material";
import {PaletteColorOptions, PaletteOptions} from "@mui/material/styles";
import {blue, brown, green, indigo, orange, pink, red, yellow} from "@mui/material/colors";

declare module '@mui/material/styles' {
    interface Palette {
        default: PaletteColor & Color;
        grayscale: Color & PaletteColor;
        grayscaleSecondary: Color & PaletteColor;
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
        grayscaleSecondary: PaletteColorOptions;
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
    mode: "light",
    common: {
        black: "#000000",
        white: "#FFFFFF"
    },
    default: {
        900: "#000000",
        800: "#303637",
        700: "#53575d",
        600: "#666a71",
        500: "#91959a",
        400: "#b1b5ba",
        300: "#d5d9de",
        200: "#e4e9ee",
        100: "#f1f4f6",
        50: "#f6f8f9",
        main: "#c3cbd4",
        contrastText: "#ffffff"
    },
    primary: {
        A700: "#2E2E31",
        A400: "#87878F",
        A200: "#BEC0C9",
        A100: "#D1D2D9",
        900: "#0011c0",
        800: "#0022d9",
        700: "#002fe3",
        600: "#003bf0",
        500: "#0144fc",
        400: "#2763EA",
        300: "#6280ff",
        200: "#96a4fe",
        100: "#c2c8fe",
        50: "#e7e9ff",
        main: "#2763EA",
        light: "#6280ff",
        dark: "#0011c0",
        contrastText: "#ffffff"
    },
    secondary: {
        A700: "#33525E",
        A400: "#668896",
        A200: "#A2B9C3",
        A100: "#C9D4F4",
        900: "#2B2B31",
        800: "#3c3d4f",
        700: "#5b5b6f",
        600: "#6f6f83",
        500: "#83839A",
        400: "#9898ad",
        300: "#B6B6CA",
        200: "#D0D0DF",
        100: "#DFDFEE",
        50: "#EFEFF6",
        main: "#3c3d4f",
        light: "#B6B6CA",
        dark: "#2B2B31",
        contrastText: "#ffffff"
    },
    grayscaleSecondary: {
        A700: "#565960",
        A400: "#9DA2AA",
        A200: "#D9DDE3",
        A100: "#c9d4f4",
        900: "#171717",
        800: "#373737",
        700: "#555555",
        600: "#686868",
        500: "#999999",
        400: "#b0b0b0",
        300: "#d5d5d5",
        200: "#f2f2f2",
        100: "#F8F8F8",
        50: "#Fcfcfc",
        main: "#686868",
        light: "#f2f2f2",
        dark: "#171717",
        contrastText: "#ffffff"
    },

    grayscale: {
        A700: "#565960",
        A400: "#9DA2AA",
        A200: "#D9DDE3",
        A100: "#E6E9EF",
        900: "#171717",
        800: "#373737",
        700: "#555555",
        600: "#686868",
        500: "#999999",
        400: "#b0b0b0",
        300: "#d5d5d5",
        200: "#f2f2f2",
        100: "#F8F8F8",
        50: "#Fcfcfc",
        main: "#686868",
        light: "#f2f2f2",
        dark: "#171717",
        contrastText: "#ffffff"
    },
    success: {
        900: "#005800",
        800: "#0f7600",
        700: "#218701",
        600: "#2f9812",
        500: "#39a71c",
        400: "#59b445",
        300: "#78c167",
        200: "#9fd193",
        100: "#c5e3bd",
        50: "#e7f4e4",
        main: "#2f9812",
        light: "#39a71c",
        dark: "#005800",
        contrastText: "#ffffff"
    },
    warning: {
        900: "#e65400",
        800: "#ef6f00",
        700: "#f57f00",
        600: "#fb8f01",
        500: "#ff9b02",
        400: "#ffa927",
        300: "#ffb94e",
        200: "#ffcd81",
        100: "#ffe1b3",
        50: "#fff3e0",
        main: "#f57f00",
        light: "#ff9b02",
        dark: "#e65400",
        contrastText: "#ffffff"
    },
    error: {
        900: "#c82b06",
        800: "#e13a11",
        700: "#ef4116",
        600: "#fd491b",
        500: "#ff4f20",
        400: "#ffa927",
        300: "#ff8764",
        200: "#ffaa90",
        100: "#ffcbbc",
        50: "#fde9e7",
        main: "#ef4116",
        light: "#ff4f20",
        dark: "#c82b06",
        contrastText: "#ffffff"
    },
    black: {
        A700: "#18315B",
        A400: "#274882",
        A200: "#6A8CC9",
        A100: "#94ACD5",
        900: "#212429",
        800: "#35393e",
        700: "#53575d",
        600: "#666a71",
        500: "#91959a",
        400: "#b1b5ba",
        300: "#d5d9de",
        200: "#e4e9ee",
        100: "#f1f4f6",
        50: "#fafbfb",
        main: "#101717",
        light: "#b1b5ba",
        dark: "#35393e",
        contrastText: "#ffffff"
    },
    red: {
        ...red,
        main: red[500],
        light: red[200],
        dark: red[700],
        contrastText: "#ffffff"
    },
    blue: {
        ...blue,
        main: blue[500],
        light: blue[200],
        dark: blue[700],
        contrastText: "#ffffff"
    },
    green: {
        ...green,
        main: green[500],
        light: green[200],
        dark: green[700],
        contrastText: "#ffffff"
    },
    yellow: {
        ...yellow,
        50: "#fffbef",
        main: yellow[500],
        light: yellow[200],
        dark: yellow[700],
        contrastText: "#ffffff"
    },
    pink: {
        ...pink,
        main: pink[500],
        light: pink[200],
        dark: pink[700],
        contrastText: "#ffffff"
    },
    brown: {
        ...brown,
        main: brown[500],
        light: brown[200],
        dark: brown[700],
        contrastText: "#ffffff"
    },
    orange: {
        ...orange,
        main: orange[500],
        light: orange[200],
        dark: orange[700],
        contrastText: "#ffffff"
    },
    indigo: {
        ...indigo,
        main: indigo[500],
        light: indigo[200],
        dark: indigo[700],
        contrastText: "#ffffff"
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
        brown: `#A1887F`
    },
    text: {
        primary: "#3c3d4f",
        secondary: "#55595E",
        disabled: "#B1B5BA"
    },
    divider: "#dfdfee",
    background: {
        default: "#F3F4F8",
        paper: "#FFFFFF"
    },
    action: {
        active: "rgba(0, 0, 0, 0.54)",
        hover: "rgba(0, 0, 0, 0.4)",
        hoverOpacity: 0.04,
        selected: "rgba(0, 0, 0, 0.08)",
        selectedOpacity: 0.08,
        disabled: "rgba(0, 0, 0, 0.26)",
        disabledBackground: "rgba(0, 0, 0, 0.12)",
        disabledOpacity: 0.38,
        focus: "rgba(0, 0, 0, 0.12)",
        focusOpacity: 0.12,
        activatedOpacity: 0.12
    }
};

