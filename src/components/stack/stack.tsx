import React, { FC } from 'react';
import { StackProps } from './types';

import { StyledStack } from './styled';

export const Stack: FC<StackProps> = (props, {
    ...restProps
}) => {
    return (
        <StyledStack
            {...props}
            {...restProps}
        >
            {props.children}
        </StyledStack>
    );
};
