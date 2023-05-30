import { BottomNavigation, styled } from '@mui/material';
import { BottomNavigationProps } from './types';

export const StyledBottomNavigation = styled(BottomNavigation, {
    shouldForwardProp: prop => ![''].includes(String(prop)),
})<BottomNavigationProps>(() => ({}));
