import { styled } from '@mui/material/styles';
import { SnackbarContent as MuiSnackbarContent } from '@mui/material';
import { SnackbarContentProps } from './types';

export const StyledSnackbarContent = styled(MuiSnackbarContent, {
  shouldForwardProp: prop => ![''].includes(String(prop)),
})<SnackbarContentProps>(({ theme }) => ({

}));
