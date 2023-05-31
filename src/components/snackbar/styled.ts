import { styled } from '@mui/material/styles';
import { Snackbar as MuiSnackbar } from '@mui/material';
import { SnackbarProps } from './types';

export const StyledSnackbar = styled(MuiSnackbar, {
  shouldForwardProp: prop => ![''].includes(String(prop)),
})<SnackbarProps>(({ theme }) => ({

}));
