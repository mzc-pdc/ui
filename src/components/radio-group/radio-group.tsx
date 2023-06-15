import React, { FC } from 'react';

import { StyledRadioGroup } from './styled';
import type { StyledRadioGroupProps } from './types';

export const RadioGroup: FC<StyledRadioGroupProps> =  React.forwardRef((props, ref) => {
    return (
        <StyledRadioGroup
            {...props}
            ref={ref}
        >
            {props.children}
        </StyledRadioGroup>
    );
});

RadioGroup.displayName = "RadioGroup";