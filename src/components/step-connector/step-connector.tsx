import React, { FC } from 'react';
import { StepConnectorProps } from './types';

import { StyledStepConnector } from './styled';

export const StepConnector: FC<StepConnectorProps> =  React.forwardRef((props, ref) => {
    return (
        <StyledStepConnector
            {...props}
            ref={ref}
        />
    );
});

StepConnector.displayName = "StepConnector";