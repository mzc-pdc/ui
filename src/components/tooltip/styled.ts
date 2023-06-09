import { styled } from '@mui/material/styles';
import { Tooltip as MuiTooltip } from '@mui/material';
import { TooltipProps } from './types';

export const StyledTooltip = styled(MuiTooltip, {
  shouldForwardProp: prop => !['color'].includes(String(prop)),
})<TooltipProps>(({ theme , color}) => ({
}));
