import {
  IconButton as MuiIconButton,
  CircularProgress,
} from '@mui/material';
import { styled, alpha, CSSObject } from '@mui/material/styles';

/* components */

/* types */
import { ExtendedIconButtonProps, StyledSpinnerProps } from './types';

export const Spinner = styled(CircularProgress)<StyledSpinnerProps>(() => ({
  position: `absolute`,
}));


export const StyledIconButton = styled(MuiIconButton, {
  shouldForwardProp: prop => !['loading'].includes(String(prop)),
})<ExtendedIconButtonProps>(({ theme, variant, color, size, loading }) => ({

}));
