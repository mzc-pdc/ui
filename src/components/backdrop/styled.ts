import { styled } from '@mui/material/styles';
import { Backdrop as MuiBackdrop } from '@mui/material';
import { BackdropProps } from './types';

export const StyledBackdrop = styled(MuiBackdrop, {
  shouldForwardProp: prop => ![''].includes(String(prop)),
})<BackdropProps>(({ theme }) => ({
}));
