import { styled } from '@mui/material/styles';
import { Zoom as MuiZoom } from '@mui/material';
import { ZoomProps } from './types';

export const StyledZoom = styled(MuiZoom, {
  shouldForwardProp: prop => ![''].includes(String(prop)),
})<ZoomProps>(({ theme }) => ({

}));
