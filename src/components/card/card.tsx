import * as React from 'react';
import { FC } from 'react';
import { StyledCard } from './styled';
import { CardProps } from './types';

export const Card: FC<CardProps> = (
    props,
    { ...restProps }
) => {
    return <StyledCard {...props} {...restProps} >{props.children}</StyledCard>;
};
