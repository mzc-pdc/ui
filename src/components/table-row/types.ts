import {TableRowProps as MuiTableRowProps} from "@mui/material";


export interface TableRowProps extends MuiTableRowProps {
    status?: 'error' | 'warning'
    checked?: boolean
}

