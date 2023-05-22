import React, { FC } from 'react';

import { StyledRadioGroup } from './styled';
import type { ExtendedRadioGroupProps } from './types';

export const RadioGroup: FC<ExtendedRadioGroupProps> = (props, {
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
