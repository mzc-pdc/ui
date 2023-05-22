import React, { FC } from 'react';

import { StyledFormControlLabel } from './styled';
import type { ExtendedFormControlLabelProps } from './types';

export const FormControlLabel: FC<ExtendedFormControlLabelProps> = (props, {
    ...restProps
}) => {
    return (
        <StyledFormControlLabel
            {...props}
            {...restProps}
        />
    );
};
