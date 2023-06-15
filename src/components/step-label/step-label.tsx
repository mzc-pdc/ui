import React, { FC } from 'react';
import { StepLabelProps } from './types';

import { StyledStepLabel } from './styled';

export const StepLabel: FC<StepLabelProps> =  React.forwardRef((props, ref) => {
    return (
        <StyledStepLabel
            {...props}
            ref={ref}
        />
    );
});

StepLabel.displayName = "StepLabel";