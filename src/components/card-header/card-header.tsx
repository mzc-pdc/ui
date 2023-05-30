import * as React from 'react';
import { FC } from 'react';
import { StyledCardHeader } from './styled';
import { CardHeaderProps } from './types';

export const CardHeader: FC<CardHeaderProps> = (
    props,
    { ...restProps }
) => {
    return <StyledCardHeader {...props} {...restProps}/>;
};
