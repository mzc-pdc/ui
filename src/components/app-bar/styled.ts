import { styled } from '@mui/material/styles';
import { AppBar as MuiAppBar } from '@mui/material';
import { AppBarProps } from './types';

export const StyledAppBar = styled(MuiAppBar, {
  shouldForwardProp: prop => !['htmlColor'].includes(String(prop)),
})<AppBarProps>(({ theme, color, htmlColor }) => ({
  ...(htmlColor && {
    backgroundColor: htmlColor,
  }),
}));
