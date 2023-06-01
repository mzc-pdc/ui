import React, { FC } from 'react';
import { StepIconProps } from './types';

import { StyledStepIcon } from './styled';

export const StepIcon: FC<StepIconProps> = (props, {
    ...restProps
}) => {
    return (
        <StyledStepIcon
            {...props}
            {...restProps}
        />
    );
};
