import React, { FC } from 'react';
import { SnackbarContentProps } from './types';

import { StyledSnackbarContent } from './styled';

export const SnackbarContent: FC<SnackbarContentProps> = (props, {
    ...restProps
}) => {
    return (
        <StyledSnackbarContent
            {...props}
            {...restProps}
        />
    );
};
