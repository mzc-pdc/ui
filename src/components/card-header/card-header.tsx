import * as React from 'react';
import { FC } from 'react';
import { StyledCardHeader } from './styled';
import { CardHeaderProps } from './types';

export const CardHeader: FC<CardHeaderProps> = React.forwardRef((props, ref) => {
    return <StyledCardHeader {...props} ref={ref}/>;
});

CardHeader.displayName = "CardHeader";