import React, { FC } from 'react';
import { PaperProps } from './types';

import { StyledPaper } from './styled';

export const Paper: FC<PaperProps> =  React.forwardRef((props, ref) => {
    return (
        <StyledPaper
            {...props}
            ref={ref}
        >
            {props.children}
        </StyledPaper>
    );
});

Paper.displayName = "Paper";