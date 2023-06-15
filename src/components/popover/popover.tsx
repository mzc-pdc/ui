import React, { FC } from 'react';
import { PopoverProps } from './types';

import { StyledPopover } from './styled';

export const Popover: FC<PopoverProps> =  React.forwardRef((props, ref) => {
    return (
        <StyledPopover
            {...props}
            ref={ref}
        >
            {props.children}
        </StyledPopover>
    );
});

Popover.displayName = "Popover";