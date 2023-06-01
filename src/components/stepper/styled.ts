import { styled } from '@mui/material/styles';
import { Stepper as MuiStepper } from '@mui/material';
import { StepperProps } from './types';

export const StyledStepper = styled(MuiStepper, {
  shouldForwardProp: prop => ![''].includes(String(prop)),
})<StepperProps>(({ theme }) => ({

}));
