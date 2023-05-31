import { styled } from '@mui/material/styles';
import { SpeedDialIcon as MuiSpeedDialIcon } from '@mui/material';
import { SpeedDialIconProps } from './types';

export const StyledSpeedDialIcon = styled(MuiSpeedDialIcon, {
  shouldForwardProp: prop => ![''].includes(String(prop)),
})<SpeedDialIconProps>(({ theme }) => ({

}));
