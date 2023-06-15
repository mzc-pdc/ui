import * as React from 'react';
import { FC } from 'react';
import { StyledBottomNavigation } from './styled';
import { BottomNavigationProps } from './types';

export const BottomNavigation: FC<BottomNavigationProps> = React.forwardRef((props, ref) => {
    return <StyledBottomNavigation {...props} ref={ref} >{props.children}</StyledBottomNavigation>;
});

BottomNavigation.displayName = "BottomNavigation";