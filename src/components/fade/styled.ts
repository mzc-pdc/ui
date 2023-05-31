import { styled } from '@mui/material/styles';
import { Fade as MuiFade } from '@mui/material';
import { FadeProps } from './types';

export const StyledFade = styled(MuiFade, {
  shouldForwardProp: prop => ![''].includes(String(prop)),
})<FadeProps>(({ theme }) => ({

}));
