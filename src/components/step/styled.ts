import { styled } from '@mui/material/styles';
import { Step as MuiStep } from '@mui/material';
import { StepProps } from './types';

export const StyledStep = styled(MuiStep, {
  shouldForwardProp: prop => ![''].includes(String(prop)),
})<StepProps>(({ theme }) => ({

}));
