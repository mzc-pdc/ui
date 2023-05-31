import React, { FC } from 'react';
import { PaperProps } from './types';

import { StyledPaper } from './styled';

export const Paper: FC<PaperProps> = (props, {
    ...restProps
}) => {
    return (
        <StyledPaper
            {...props}
            {...restProps}
        >
            {props.children}
        </StyledPaper>
    );
};
