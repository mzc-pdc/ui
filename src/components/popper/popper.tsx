import React, { FC } from 'react';
import { PopperProps } from './types';

import { StyledPopper } from './styled';

export const Popper: FC<PopperProps> =  React.forwardRef((props, ref) => {
    return (
        <StyledPopper
            {...props}
            ref={ref}
        >
            {props.children}
        </StyledPopper>
    );
});

Popper.displayName = "Popper";