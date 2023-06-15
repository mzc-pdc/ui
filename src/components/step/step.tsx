import React, { FC } from 'react';
import { StepProps } from './types';

import { StyledStep } from './styled';

export const Step: FC<StepProps> =  React.forwardRef((props, ref) => {
    return (
        <StyledStep
            {...props}
            ref={ref}
        >
            {props.children}
        </StyledStep>
    );
});

Step.displayName = "Step";