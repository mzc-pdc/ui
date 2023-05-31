import { styled } from '@mui/material/styles';
import { StepConnector as MuiStepConnector } from '@mui/material';
import { StepConnectorProps } from './types';

export const StyledStepConnector = styled(MuiStepConnector, {
  shouldForwardProp: prop => ![''].includes(String(prop)),
})<StepConnectorProps>(({ theme }) => ({

}));
