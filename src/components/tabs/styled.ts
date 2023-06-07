import {styled} from '@mui/material/styles';
import {alpha, Tabs as MuiTabs} from '@mui/material';
import {TabsProps} from './types';

export const StyledTabs = styled(MuiTabs, {
    shouldForwardProp: prop => ![''].includes(String(prop)),
})<TabsProps>(({theme}) => ({

}));
