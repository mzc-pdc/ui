import { styled } from '@mui/material/styles';
import { AppBar as MuiAppBar } from '@mui/material';
import { IAppBarProps } from './types';

export const StyledAppBar = styled(MuiAppBar, {
  shouldForwardProp: prop => !['htmlColor'].includes(String(prop)),
})<IAppBarProps>(({ theme, color, htmlColor }) => ({
  boxShadow: `none`,
  ...(htmlColor && {
    backgroundColor: htmlColor,
  }),
}));
