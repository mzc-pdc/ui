import { styled } from '@mui/material/styles';
import { Box as MuiBox } from '@mui/material';
import { BoxProps } from './types';

export const StyledBox = styled(MuiBox, {
  shouldForwardProp: prop => ![''].includes(String(prop)),
})<BoxProps>(({ theme }) => ({

}));
