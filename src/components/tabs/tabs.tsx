import React, { FC } from 'react';
import { TabsProps } from './types';

import { StyledTabs } from './styled';

export const Tabs: FC<TabsProps> =  React.forwardRef((props, ref) => {
    return (
        <StyledTabs
            {...props}
            ref={ref}
        >
            {props.children}
        </StyledTabs>
    );
});

Tabs.displayName = "Tabs";