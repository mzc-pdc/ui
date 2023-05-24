import {Components} from '@mui/material/styles/components';
import {alpha} from "@mui/system";

export const TableRowTheme = (
    theme: any
): Components['MuiTableRow'] => ({
    defaultProps: {},
    styleOverrides: {
    },
    variants: [
        {
            props: {hover: true},
            style: {
                '&&:hover': {
                    backgroundColor: alpha( `#e5e7ed`, 0.24)
                }
            }
        },
        {
            props: {selected: true},
            style: {
                '&&': {
                    backgroundColor: alpha( theme.palette.secondary.A100, 0.36),
                    '&&:hover': {
                        backgroundColor: alpha( theme.palette.secondary.A100, 0.48),
                    }
                }
            }
        }
    ]
})