import * as React from 'react';
import { FC } from 'react';
import { StyledCardActions } from './styled';
import { CardActionsProps } from './types';

export const CardActions: FC<CardActionsProps> = (
    props,
    { ...restProps }
) => {
    return <StyledCardActions {...props} {...restProps} >{props.children}</StyledCardActions>;
};
