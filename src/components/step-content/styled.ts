import { styled } from '@mui/material/styles';
import { StepContent as MuiStepContent } from '@mui/material';
import { StepContentProps } from './types';

export const StyledStepContent = styled(MuiStepContent, {
  shouldForwardProp: prop => ![''].includes(String(prop)),
})<StepContentProps>(({ theme }) => ({

}));
