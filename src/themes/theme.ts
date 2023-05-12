import React, {ReactNode, FC} from 'react';
import {
    createTheme,
    ThemeProvider,
    StyledEngineProvider,
    ThemeOptions,
} from '@mui/material/styles';

import {palette} from './palette';
import {typography} from './typography';
import {ButtonTheme} from "../components/button/theme";
import {IconButtonTheme} from "../components/iconButton/theme";
import {CheckboxTheme} from "../components/checkbox/theme";
import {RadioTheme} from "../components/radio/theme";
import {ChipTheme} from "../components/chip/theme";
import {
    FilledInputTheme,
    FormHelperTextTheme,
    FormLabelTheme,
    OutlinedInputTheme,
    TextFieldTheme
} from "../components/textField/theme";
import {SelectTheme} from "../components/select/theme";
import {AutocompleteTheme} from "../components/autocomplete/theme";
import {SwitchTheme} from "../components/switch/theme";

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
};

const overrideTheme = createTheme({
    ...defaultTheme,
    components: {
        MuiCssBaseline: {
            styleOverrides: `
              body {
                font-family: 'Noto Sans KR';
                font-size: 1rem;
              }
        `,
        },
        MuiButton: {...ButtonTheme(defaultTheme),},
        MuiIconButton: {...IconButtonTheme(defaultTheme),},
        MuiChip: {...ChipTheme(defaultTheme),},
        MuiCheckbox: {...CheckboxTheme(defaultTheme),},
        MuiRadio: {...RadioTheme(defaultTheme),},
        MuiTextField: {...TextFieldTheme(defaultTheme),},
        MuiOutlinedInput: {...OutlinedInputTheme(defaultTheme),},
        MuiFilledInput: {...FilledInputTheme(defaultTheme),},
        MuiFormLabel: {...FormLabelTheme(defaultTheme),},
        MuiFormHelperText: {...FormHelperTextTheme(defaultTheme),},
        MuiSelect: {...SelectTheme(defaultTheme),},
        MuiAutocomplete: {...AutocompleteTheme(defaultTheme),},
        MuiSwitch: {...SwitchTheme(defaultTheme),},
    }
});
export const theme = createTheme(overrideTheme);

// NOTE: 1.  theme 자체를 export 해서 제품에서 제품테마와 머징해서 쓰는 법
// export const storybookTheme = (projectTheme) => ({
//     ...projectTheme,
//     components: {
//         MuiCssBaseline: {
//             styleOverrides: `
//               body {
//                 font-family: 'Noto Sans KR';
//                 font-size: 1rem;
//               }
//         `,
//         },
//         MuiButton: {...ButtonTheme(defaultTheme),},
//     }
// })

// NOTE: 2. 기존처럼 Provider 생성 후 export : 제품에서 여러개의 provider 사용
// export type PDCThemeProps = {
//     theme?: ThemeOptions;
//     children: ReactNode;
// };
//
// export const PDCThemeProvider: FC<PDCThemeProps> = ({theme, children}) => {
//
//     const customTheme: object = {
//         ...defaultTheme,
//         ...(theme || {}),
//     };
//
//     const useTheme = createTheme({
//         ...customTheme,
//         components: {
//             MuiButton: {...ButtonTheme(defaultTheme),},
//         }
//     });
//
//     return (
//         <StyledEngineProvider injectFirst>
//             <ThemeProvider theme={useTheme}>
//                 {children}
//             </ThemeProvider>
//         </StyledEngineProvider>
//     );
// };