import React, { FC } from 'react';
import { StepContentProps } from './types';

import { StyledStepContent } from './styled';

export const StepContent: FC<StepContentProps> = (props, {
    ...restProps
}) => {
    return (
        <StyledStepContent
            {...props}
            {...restProps}
        >
            {props.children}
        </StyledStepContent>
    );
};
