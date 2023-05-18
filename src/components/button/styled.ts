import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from '@mui/material';
import { styled } from '@mui/material/styles';

export interface ExtendedButtonProps extends MuiButtonProps {
  // additional prop keys that do not exist in MuiThemeProps
}

export const StyledButton = styled(MuiButton, {
  shouldForwardProp: prop => ![''].includes(String(prop)),
})<ExtendedButtonProps>(({}) => ({
  // style properties
}));
