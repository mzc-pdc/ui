import { Drawer, styled } from '@mui/material';
import { DrawerProps } from './types';

export const StyledDrawer = styled(Drawer, {
    shouldForwardProp: prop => ![''].includes(String(prop)),
})<DrawerProps>(() => ({}));
