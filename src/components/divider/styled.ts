import { styled } from '@mui/material/styles';
import { Divider as MuiDivider } from '@mui/material';
import { DividerProps } from './types';

export const StyledDivider = styled(MuiDivider, {
  shouldForwardProp: prop => ![''].includes(String(prop)),
})<DividerProps>(({ theme }) => ({

}));
