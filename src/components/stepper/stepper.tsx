import React, { FC } from 'react';
import { StepperProps } from './types';

import { StyledStepper } from './styled';

export const Stepper: FC<StepperProps> =  React.forwardRef((props, ref) => {
    return (
        <StyledStepper
            {...props}
            ref={ref}
        />
    );
});

Stepper.displayName = "Stepper";