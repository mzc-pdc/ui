import * as React from 'react';
import { FC } from 'react';
import { StyledCard } from './styled';
import { CardProps } from './types';

export const Card: FC<CardProps> = React.forwardRef((props, ref) => {
    return <StyledCard {...props} ref={ref} >{props.children}</StyledCard>;
});

Card.displayName = "Card";