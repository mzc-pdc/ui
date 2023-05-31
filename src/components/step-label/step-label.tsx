import React, { FC } from 'react';
import { StepLabelProps } from './types';

import { StyledStepLabel } from './styled';

export const StepLabel: FC<StepLabelProps> = (props, {
    ...restProps
}) => {
    return (
        <StyledStepLabel
            {...props}
            {...restProps}
        />
    );
};
