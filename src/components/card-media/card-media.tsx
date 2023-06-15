import * as React from 'react';
import { FC } from 'react';
import { StyledCardMedia } from './styled';
import { CardMediaProps } from './types';

export const CardMedia: FC<CardMediaProps> = React.forwardRef((props, ref) => {
    return <StyledCardMedia {...props} ref={ref} >{props.children}</StyledCardMedia>;
});

CardMedia.displayName = "CardMedia";