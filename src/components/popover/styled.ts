import { styled } from '@mui/material/styles';
import { Popover as MuiPopover } from '@mui/material';
import { PopoverProps } from './types';

export const StyledPopover = styled(MuiPopover, {
  shouldForwardProp: prop => ![''].includes(String(prop)),
})<PopoverProps>(({ theme }) => ({

}));
