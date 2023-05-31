import { styled } from '@mui/material/styles';
import { StepButton as MuiStepButton } from '@mui/material';
import { StepButtonProps } from './types';

export const StyledStepButton = styled(MuiStepButton, {
  shouldForwardProp: prop => ![''].includes(String(prop)),
})<StepButtonProps>(({ theme }) => ({

}));
