import React, { FC } from 'react';
import { PopoverProps } from './types';

import { StyledPopover } from './styled';

export const Popover: FC<PopoverProps> = (props, {
    ...restProps
}) => {
    return (
        <StyledPopover
            {...props}
            {...restProps}
        >
            {props.children}
        </StyledPopover>
    );
};
