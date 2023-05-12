import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
  CircularProgress,
} from '@mui/material';
import { styled } from '@mui/material/styles';

import { StyledButtonProps, StyledSpinnerProps } from './types';
type ExtendedButtonProps = MuiButtonProps & StyledButtonProps;

export const Children = styled('span')``;

export const Spinner = styled(CircularProgress)<StyledSpinnerProps>(() => ({
  position: `absolute`,
}));

export const StyledButton = styled(MuiButton, {
  shouldForwardProp: prop => !['loading'].includes(String(prop)),
})<ExtendedButtonProps>(() => ({

}));
