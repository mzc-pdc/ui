import React, { FC } from 'react';
import { PopperProps } from './types';

import { StyledPopper } from './styled';

export const Popper: FC<PopperProps> = (props, {
    ...restProps
}) => {
    return (
        <StyledPopper
            {...props}
            {...restProps}
        >
            {props.children}
        </StyledPopper>
    );
};
