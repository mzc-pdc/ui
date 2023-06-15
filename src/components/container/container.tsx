import React, { FC } from 'react';

import { ContainerProps } from './types';

import { StyledContainer } from './styled';

export const Container: FC<ContainerProps> = React.forwardRef((props, ref) => {
    return <StyledContainer {...props} ref={ref} >{props.children}</StyledContainer>;
});

Container.displayName = "Container";