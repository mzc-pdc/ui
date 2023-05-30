import * as React from 'react';
import { FC } from 'react';
import { StyledBottomNavigation } from './styled';
import { BottomNavigationProps } from './types';

export const BottomNavigation: FC<BottomNavigationProps> = (
    props,
    { ...restProps }
) => {
    return <StyledBottomNavigation {...props} {...restProps} >{props.children}</StyledBottomNavigation>;
};
