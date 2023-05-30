import React, { FC } from 'react';
import { DividerProps } from './types';

import { StyledDivider } from './styled';

export const Divider: FC<DividerProps> = (props, {
    ...restProps
}) => {
    return (
        <StyledDivider
            {...props}
            {...restProps}
        />
    );
};
