import { Button as MuiButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { IButtonProps } from './types';

export const StyledButton = styled(MuiButton, {
  shouldForwardProp: prop => ![''].includes(String(prop)),
})<IButtonProps>(({ theme }) => ({
  // Add style when props key is added
}));
