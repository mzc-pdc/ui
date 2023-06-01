import React, { FC } from 'react';
import { StepConnectorProps } from './types';

import { StyledStepConnector } from './styled';

export const StepConnector: FC<StepConnectorProps> = (props, {
    ...restProps
}) => {
    return (
        <StyledStepConnector
            {...props}
            {...restProps}
        />
    );
};
