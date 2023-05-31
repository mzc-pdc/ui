import React, { FC } from 'react';
import { StepperProps } from './types';

import { StyledStepper } from './styled';

export const Stepper: FC<StepperProps> = (props, {
    ...restProps
}) => {
    return (
        <StyledStepper
            {...props}
            {...restProps}
        />
    );
};
