import React, { FC } from 'react';
import { StackProps } from './types';

import { StyledStack } from './styled';

export const Stack: FC<StackProps> =  React.forwardRef((props, ref) => {
    return (
        <StyledStack
            {...props}
            ref={ref}
        >
            {props.children}
        </StyledStack>
    );
});

Stack.displayName = "Stack";