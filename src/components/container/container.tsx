import React, { FC } from 'react';

import { ContainerProps } from './types';

import { StyledContainer } from './styled';

export const Container: FC<ContainerProps> = (props,{ ...restProps }) => {
    return <StyledContainer {...props} {...restProps} >{props.children}</StyledContainer>;
};