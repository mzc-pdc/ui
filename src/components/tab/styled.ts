import { styled } from '@mui/material/styles';
import { Tab as MuiTab } from '@mui/material';
import { TabProps } from './types';

export const StyledTab = styled(MuiTab, {
  shouldForwardProp: prop => ![''].includes(String(prop)),
})<TabProps>(({ theme }) => ({

}));
