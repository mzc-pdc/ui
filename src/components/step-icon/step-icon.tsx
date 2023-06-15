import React, { FC } from 'react';
import { StepIconProps } from './types';

import { StyledStepIcon } from './styled';

export const StepIcon: FC<StepIconProps> =  React.forwardRef((props, ref) => {
    return (
        <StyledStepIcon
            {...props}
            ref={ref}
        />
    );
});

StepIcon.displayName = "StepIcon";