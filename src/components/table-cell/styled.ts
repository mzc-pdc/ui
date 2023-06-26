import {TableCell, styled} from '@mui/material';
import {TableCellProps} from "./types";


export const StyledTableCell = styled(TableCell, {
  shouldForwardProp: prop => ![''].includes(String(prop)),
})<TableCellProps>(({theme}) => ({

  '&:not(.MuiTableCell-head)': {
    fontWeight: `normal`,
  },
  '&:first-of-type': {
    '&:has(input[type="checkbox"]), &:has(.MuiIconButton-root) ': {
      paddingLeft: 8,
      '&:has(.MuiCollapse-root)': {
        paddingLeft: 0,
      },
    }
  }
}));
