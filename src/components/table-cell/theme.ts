import {Components} from '@mui/material/styles/components';

export const TableCellTheme = (
    theme: any
): Components['MuiTableCell'] => ({
    defaultProps: {},
    styleOverrides: {
        root: {
            borderColor: theme.palette.divider,
            fontSize: `0.875rem`,
        },
        sizeSmall: {
            padding: `0.5rem 1rem`,
        },
        sizeMedium: {
            padding: `0.75rem 1rem`
        },
        paddingCheckbox: {
            paddingLeft: `0.5rem`,
            paddingRight: `0.5rem`,
        },
    }
})