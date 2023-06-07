import { styled } from '@mui/material/styles';
import { TabScrollButton as MuiTabScrollButton } from '@mui/material';
import { TabScrollButtonProps } from './types';

export const StyledTabScrollButton = styled(MuiTabScrollButton, {
  shouldForwardProp: prop => ![''].includes(String(prop)),
})<TabScrollButtonProps>(({ theme }) => ({

}));
