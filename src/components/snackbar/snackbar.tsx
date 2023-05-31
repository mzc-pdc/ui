import React, { FC } from 'react';
import { SnackbarProps } from './types';

import { StyledSnackbar } from './styled';

export const Snackbar: FC<SnackbarProps> = (props, {
    ...restProps
}) => {
    return (
        <StyledSnackbar
            {...props}
            {...restProps}
        >
            {props.children}
        </StyledSnackbar>
    );
};
