import React, { FC } from 'react';
import { StepContentProps } from './types';

import { StyledStepContent } from './styled';

export const StepContent: FC<StepContentProps> =  React.forwardRef((props, ref) => {
    return (
        <StyledStepContent
            {...props}
            ref={ref}
        >
            {props.children}
        </StyledStepContent>
    );
});

StepContent.displayName = "StepContent";