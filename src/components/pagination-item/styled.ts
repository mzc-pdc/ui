import { styled } from '@mui/material/styles';
import { PaginationItem as MuiPaginationItem } from '@mui/material';
import { PaginationItemProps } from './types';

export const StyledPaginationItem = styled(MuiPaginationItem, {
  shouldForwardProp: prop => ![''].includes(String(prop)),
})<PaginationItemProps>(({ theme }) => ({

}));
