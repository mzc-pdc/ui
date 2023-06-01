import { styled } from '@mui/material/styles';
import { StepLabel as MuiStepLabel } from '@mui/material';
import { StepLabelProps } from './types';

export const StyledStepLabel = styled(MuiStepLabel, {
  shouldForwardProp: prop => ![''].includes(String(prop)),
})<StepLabelProps>(({ theme }) => ({

}));
