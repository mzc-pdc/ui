import * as React from 'react';
import { FC } from 'react';
import { StyledCardContent } from './styled';
import { CardContentProps } from './types';

export const CardContent: FC<CardContentProps> = (
    props,
    { ...restProps }
) => {
    return <StyledCardContent {...props} {...restProps} >{props.children}</StyledCardContent>;
};
