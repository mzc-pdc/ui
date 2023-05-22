import React, { FC } from 'react';

import { StyledToggleButton, StyledToggleButtonGroup } from './styled';
import type { ExtendedToggleButtonProps, ExtendedToggleButtonGroupProps } from './types';

export const ToggleButton: FC<ExtendedToggleButtonProps> = (props, {
    ...restProps
}) => {
    return (
        <StyledToggleButton
            {...props}
            {...restProps}
        >
            {props.children}
        </StyledToggleButton>
    );
};

export const ToggleButtonGroup: FC<ExtendedToggleButtonGroupProps> = (props, {
    ...restProps
}) => {
    return (
        <StyledToggleButtonGroup
            {...props}
            {...restProps}
        >
            {props.children}
        </StyledToggleButtonGroup>
    );
};
