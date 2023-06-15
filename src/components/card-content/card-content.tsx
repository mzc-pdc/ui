import * as React from 'react';
import { FC } from 'react';
import { StyledCardContent } from './styled';
import { CardContentProps } from './types';

export const CardContent: FC<CardContentProps> = React.forwardRef((props, ref) => {
    return <StyledCardContent {...props} ref={ref} >{props.children}</StyledCardContent>;
});

CardContent.displayName = "CardContent";