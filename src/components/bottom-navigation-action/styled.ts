import { BottomNavigationAction, styled } from '@mui/material';
import { BottomNavigationActionProps } from './types';

export const StyledBottomNavigationAction = styled(BottomNavigationAction, {
    shouldForwardProp: prop => ![''].includes(String(prop)),
})<BottomNavigationActionProps>(() => ({}));
