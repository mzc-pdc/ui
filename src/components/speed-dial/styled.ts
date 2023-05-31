import { styled } from '@mui/material/styles';
import { SpeedDial as MuiSpeedDial } from '@mui/material';
import { SpeedDialProps } from './types';

export const StyledSpeedDial = styled(MuiSpeedDial, {
  shouldForwardProp: prop => ![''].includes(String(prop)),
})<SpeedDialProps>(({ theme }) => ({

}));
