import React, { FC } from 'react';

import { StyledButtonGroup } from './styled';
import type { ExtendedButtonGroupProps } from './types';

export const ButtonGroup: FC<ExtendedButtonGroupProps> = (props,{
    ...restProps
}) => {
    return (
        <StyledButtonGroup
            {...props}
            {...restProps}
        >
            {props.children}
        </StyledButtonGroup>
    );
};
