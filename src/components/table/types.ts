import {TableProps as MuiTableProps} from "@mui/material";

declare module '@mui/material/Table' {
    export interface TablePropsSizeOverrides {
        large: true;
    }
}

export interface TableProps extends MuiTableProps {

}

