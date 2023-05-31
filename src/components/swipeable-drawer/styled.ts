import { styled } from '@mui/material/styles';
import { SwipeableDrawer as MuiSwipeableDrawer } from '@mui/material';
import { SwipeableDrawerProps } from './types';

export const StyledSwipeableDrawer = styled(MuiSwipeableDrawer, {
  shouldForwardProp: prop => ![''].includes(String(prop)),
})<SwipeableDrawerProps>(({ theme }) => ({

}));
