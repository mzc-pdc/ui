import * as React from 'react';
import { FC } from 'react';
import { StyledCardActionArea } from './styled';
import { CardActionAreaProps } from './types';

export const CardActionsArea: FC<CardActionAreaProps> = (
    props,
    { ...restProps }
) => {
    return <StyledCardActionArea {...props} {...restProps} >{props.children}</StyledCardActionArea>;
};
