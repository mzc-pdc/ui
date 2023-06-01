import { styled } from '@mui/material/styles';
import { StepIcon as MuiStepIcon } from '@mui/material';
import { StepIconProps } from './types';

export const StyledStepIcon = styled(MuiStepIcon, {
  shouldForwardProp: prop => ![''].includes(String(prop)),
})<StepIconProps>(({ theme }) => ({

}));
