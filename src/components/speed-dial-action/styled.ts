import { styled } from '@mui/material/styles';
import { SpeedDialAction as MuiSpeedDialAction } from '@mui/material';
import { SpeedDialActionProps } from './types';

export const StyledSpeedDialAction = styled(MuiSpeedDialAction, {
  shouldForwardProp: prop => ![''].includes(String(prop)),
})<SpeedDialActionProps>(({ theme }) => ({

}));
