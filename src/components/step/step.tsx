import React, { FC } from 'react';
import { StepProps } from './types';

import { StyledStep } from './styled';

export const Step: FC<StepProps> = (props, {
    ...restProps
}) => {
    return (
        <StyledStep
            {...props}
            {...restProps}
        >
            {props.children}
        </StyledStep>
    );
};
