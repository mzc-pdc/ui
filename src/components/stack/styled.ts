import { styled } from '@mui/material/styles';
import { Stack as MuiStack } from '@mui/material';
import { StackProps } from './types';

export const StyledStack = styled(MuiStack, {
  shouldForwardProp: prop => ![''].includes(String(prop)),
})<StackProps>(({ theme }) => ({

}));
