import * as React from 'react';
import { FC } from 'react';
import { StyledCardActions } from './styled';
import { CardActionsProps } from './types';

export const CardActions: FC<CardActionsProps> = React.forwardRef((props, ref) => {
    return <StyledCardActions {...props} ref={ref} >{props.children}</StyledCardActions>;
});

CardActions.displayName = "CardActions";