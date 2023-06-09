import {Components} from '@mui/material/styles/components';

export const TablePaginationTheme = (
    theme: any
): Components['MuiTablePagination'] => ({
    defaultProps: {},
    styleOverrides: {
        // selectLabel: {
        //     display: "none"
        // },
        selectRoot: {
            order: 3,
            marginRight: 0,
            marginLeft: 0,
            border: `1px solid ${theme.palette.secondary[300]}`,
            borderRadius: 2
        },
        select: {
            paddingLeft: `1rem`
        },
        input: {
            fontWeight: `normal`
        },
        actions: {
            marginLeft: `calc(${theme.spacing}px / 4)`,
        },
        displayedRows: {
            fontSize: `0.875rem`,
            fontWeight: `normal`
        }
    }
})