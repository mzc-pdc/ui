import {Components} from '@mui/material/styles/components';

export const MenuTheme = (
    theme: any
): Components['MuiMenu'] => ({
    defaultProps: {},
    styleOverrides: {
        root: ({ ownerState }) => ({

        }),
    }
})