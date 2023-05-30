import * as React from 'react';
import { FC } from 'react';
import { StyledCardMedia } from './styled';
import { CardMediaProps } from './types';

export const CardMedia: FC<CardMediaProps> = (
    props,
    { ...restProps }
) => {
    return <StyledCardMedia {...props} {...restProps} >{props.children}</StyledCardMedia>;
};
