import * as React from 'react';
import { FC } from 'react';
import { StyledBottomNavigationAction } from './styled';
import { BottomNavigationActionProps } from './types';

export const BottomNavigationAction: FC<BottomNavigationActionProps>= React.forwardRef((props, ref) => {
    return <StyledBottomNavigationAction {...props} ref={ref} >{props.children}</StyledBottomNavigationAction>;
});

BottomNavigationAction.displayName = "BottomNavigationAction";