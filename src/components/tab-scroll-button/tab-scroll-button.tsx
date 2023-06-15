import React, { FC } from 'react';
import { TabScrollButtonProps } from './types';

import { StyledTabScrollButton } from './styled';

export const TabScrollButton: FC<TabScrollButtonProps> =  React.forwardRef((props, ref) => {
    return (
        <StyledTabScrollButton
            {...props}
            ref={ref}
        />
    );
});

TabScrollButton.displayName = "TabScrollButton";