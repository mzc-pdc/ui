import * as React from 'react';
import { FC } from 'react';
import { StyledDrawer } from './styled';
import { DrawerProps } from './types';

export const Drawer: FC<DrawerProps> = React.forwardRef((props, ref) => {
    return <StyledDrawer {...props} ref={ref} >{props.children}</StyledDrawer>;
});

Drawer.displayName = "Drawer";