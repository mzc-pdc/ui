import React, { FC } from 'react';
import { StepButtonProps } from './types';

import { StyledStepButton } from './styled';

export const StepButton: FC<StepButtonProps> = (props, {
    ...restProps
}) => {
    return (
        <StyledStepButton
            {...props}
            {...restProps}
        >
            {props.children}
        </StyledStepButton>
    );
};
