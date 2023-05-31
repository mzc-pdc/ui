import { styled } from '@mui/material/styles';
import { SvgIcon as MuiSvgIcon } from '@mui/material';
import { SvgIconProps } from './types';

export const StyledSvgIcon = styled(MuiSvgIcon, {
  shouldForwardProp: prop => ![''].includes(String(prop)),
})<SvgIconProps>(({ theme }) => ({

}));
