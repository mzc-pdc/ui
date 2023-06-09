import { styled } from '@mui/material/styles';
import { Typography as MuiTypography } from '@mui/material';
import { TypographyProps } from './types';

export const StyledTypography = styled(MuiTypography, {
  shouldForwardProp: prop => ![''].includes(String(prop)),
})<TypographyProps>(({ theme }) => ({

}));
