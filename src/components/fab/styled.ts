import { styled } from '@mui/material/styles';
import { Fab as MuiFab } from '@mui/material';
import { FabProps } from './types';

export const StyledFab = styled(MuiFab, {
  shouldForwardProp: prop => ![''].includes(String(prop)),
})<FabProps>(({ theme }) => ({

}));
