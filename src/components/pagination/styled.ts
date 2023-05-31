import { styled } from '@mui/material/styles';
import { Pagination as MuiPagination } from '@mui/material';
import { PaginationProps } from './types';

export const StyledPagination = styled(MuiPagination, {
  shouldForwardProp: prop => ![''].includes(String(prop)),
})<PaginationProps>(({ theme }) => ({

}));
