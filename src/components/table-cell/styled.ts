import { TableCell, styled } from '@mui/material';
import {TableCellProps} from "./types";


export const StyledTableCell = styled(TableCell, {
    shouldForwardProp: prop => ![''].includes(String(prop)),
})<TableCellProps>(({ theme }) => ({
    '&:has(input[type="checkbox"]) + .MuiTableCell-root': {
        paddingLeft: 0,
    },
}));
