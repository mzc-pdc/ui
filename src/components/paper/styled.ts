import { styled } from '@mui/material/styles';
import { Paper as MuiPaper } from '@mui/material';
import { PaperProps } from './types';

export const StyledPaper = styled(MuiPaper, {
  shouldForwardProp: prop => ![''].includes(String(prop)),
})<PaperProps>(({ theme }) => ({

}));
