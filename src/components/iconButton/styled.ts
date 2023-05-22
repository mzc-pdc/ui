import {
  IconButton as MuiIconButton,
  CircularProgress,
} from '@mui/material';
import { styled } from '@mui/material/styles';

/* components */

/* types */
import { ExtendedIconButtonProps, StyledSpinnerProps } from './types';

export const Spinner = styled(CircularProgress)<StyledSpinnerProps>(() => ({
  position: `absolute`,
}));


export const StyledIconButton = styled(MuiIconButton, {
  shouldForwardProp: prop => !['loading', 'circled'].includes(String(prop)),
})<ExtendedIconButtonProps>(({ theme,loading , circled}) => ({

  // ...(loading === true && {
  //   outline: `1px solid red`
  // }),
  // ...(circled === true && {
  //   borderRadius: `100%`,
  // }),

}));
