import { styled } from '@mui/material/styles';
import { Grid as MuiGrid } from '@mui/material';
import { GridProps } from './types';

export const StyledGrid = styled(MuiGrid, {
  shouldForwardProp: prop => ![''].includes(String(prop)),
})<GridProps>(({ theme }) => ({

}));
