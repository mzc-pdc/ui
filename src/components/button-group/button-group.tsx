import React, { FC } from 'react';

import { StyledButtonGroup } from './styled';
import type { ButtonGroupProps } from './types';

export const ButtonGroup: FC<ButtonGroupProps> = (props,{
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
