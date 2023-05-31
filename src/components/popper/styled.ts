import { styled } from '@mui/material/styles';
import { Popper as MuiPopper } from '@mui/material';
import { PopperProps } from './types';

export const StyledPopper = styled(MuiPopper, {
  shouldForwardProp: prop => ![''].includes(String(prop)),
})<PopperProps>(({ theme }) => ({

}));
