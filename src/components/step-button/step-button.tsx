import React, { FC } from 'react';
import { StepButtonProps } from './types';

import { StyledStepButton } from './styled';

export const StepButton: FC<StepButtonProps> =  React.forwardRef((props, ref) => {
    return (
        <StyledStepButton
            {...props}
            ref={ref}
        >
            {props.children}
        </StyledStepButton>
    );
});

StepButton.displayName = "StepButton";