import * as React from 'react';
import { FC } from 'react';
import { StyledBottomNavigationAction } from './styled';
import { BottomNavigationActionProps } from './types';

export const BottomNavigationAction: FC<BottomNavigationActionProps> = (
    props,
    { ...restProps }
) => {
    return <StyledBottomNavigationAction {...props} {...restProps} >{props.children}</StyledBottomNavigationAction>;
};
