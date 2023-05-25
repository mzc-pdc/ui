import React, { FC } from 'react';

import { StyledRadioGroup } from './styled';
import type { StyledRadioGroupProps } from './types';

export const RadioGroup: FC<StyledRadioGroupProps> = (props, {
    ...restProps
}) => {
    return (
        <StyledRadioGroup
            {...props}
            {...restProps}
        >
            {props.children}
        </StyledRadioGroup>
    );
};
