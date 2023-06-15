import * as React from 'react';
import { FC } from 'react';
import { StyledCardActionArea } from './styled';
import { CardActionAreaProps } from './types';

export const CardActionsArea: FC<CardActionAreaProps> = React.forwardRef((props, ref) => {
    return <StyledCardActionArea {...props} ref={ref} >{props.children}</StyledCardActionArea>;
});

CardActionsArea.displayName = "CardActionsArea";