import React, { FC } from 'react';
import { SnackbarContentProps } from './types';

import { StyledSnackbarContent } from './styled';

export const SnackbarContent: FC<SnackbarContentProps> =  React.forwardRef((props, ref) => {
    return (
        <StyledSnackbarContent
            {...props}
            ref={ref}
        />
    );
});

SnackbarContent.displayName = "SnackbarContent";