import {Components} from '@mui/material/styles/components';

export const TableTheme = (
    theme: any
): Components['MuiTable'] => ({
    defaultProps: {},
    styleOverrides: {
        root: ({ ownerState }) => ({
            ...(ownerState.size === 'large' && {
                '.MuiTableCell-root': {
                    padding: `1rem`
                }
            }),
        }),}
})