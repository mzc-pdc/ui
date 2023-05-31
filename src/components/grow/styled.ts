import { styled } from '@mui/material/styles';
import { Grow as MuiGrow } from '@mui/material';
import { GrowProps } from './types';

export const StyledGrow = styled(MuiGrow, {
  shouldForwardProp: prop => ![''].includes(String(prop)),
})<GrowProps>(({ theme }) => ({

}));
