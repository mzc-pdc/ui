import { styled } from '@mui/material/styles';
import { Toolbar as MuiToolbar } from '@mui/material';
import { ToolbarProps } from './types';

export const StyledToolBar = styled(MuiToolbar, {
  shouldForwardProp: prop => ![''].includes(String(prop)),
})<ToolbarProps>(({ theme }) => ({

}));
