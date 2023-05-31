import { styled } from '@mui/material/styles';
import { Link as MuiLink } from '@mui/material';
import { LinkProps } from './types';

export const StyledLink = styled(MuiLink, {
  shouldForwardProp: prop => ![''].includes(String(prop)),
})<LinkProps>(({ theme }) => ({

}));
