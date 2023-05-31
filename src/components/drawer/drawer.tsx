import * as React from 'react';
import { FC } from 'react';
import { StyledDrawer } from './styled';
import { DrawerProps } from './types';

export const Drawer: FC<DrawerProps> = (
    props,
    { ...restProps }
) => {
    return <StyledDrawer {...props} {...restProps} >{props.children}</StyledDrawer>;
};
