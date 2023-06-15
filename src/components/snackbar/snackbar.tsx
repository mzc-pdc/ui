import React, { FC } from 'react';
import { SnackbarProps } from './types';

import { StyledSnackbar } from './styled';

export const Snackbar: FC<SnackbarProps> =  React.forwardRef((props, ref) => {
    return (
        <StyledSnackbar
            {...props}
            ref={ref}
        >
            {props.children}
        </StyledSnackbar>
    );
});

Snackbar.displayName = "Snackbar";