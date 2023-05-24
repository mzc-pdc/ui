import { TableRow,  styled } from '@mui/material';
import {alpha} from "@mui/system";
import {TableRowProps} from "./types";


const statusMixin = ({ theme, status }: any) => ({
    ...(status === 'warning' && {
        backgroundColor: alpha( theme.palette.warning[100], 0.24),
        '&&:hover': {
            backgroundColor: alpha( theme.palette.warning[100], 0.36),
        }
    }),
    ...(status === 'error' && {
        backgroundColor: alpha( theme.palette.error[100], 0.24),
        '&&:hover': {
            backgroundColor: alpha( theme.palette.error[100], 0.36),
        }
    }),
});

export const StyledTableRow = styled(TableRow, {
    shouldForwardProp: prop => !['checked', 'status'].includes(String(prop)),
})<TableRowProps>(({ theme , checked, status}) => ({
    ...(checked && {
        backgroundColor: alpha( theme.palette.secondary.A100, 0.24),
        '&&:hover': {
            backgroundColor: alpha( theme.palette.secondary.A100, 0.36),
        }
    }),
    ...(status && statusMixin({theme, status}))
}));
