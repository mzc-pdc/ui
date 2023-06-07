import React, { FC } from 'react';
import { TabScrollButtonProps } from './types';

import { StyledTabScrollButton } from './styled';

export const TabScrollButton: FC<TabScrollButtonProps> = (props, {
    ...restProps
}) => {
    return (
        <StyledTabScrollButton
            {...props}
            {...restProps}
        />
    );
};
