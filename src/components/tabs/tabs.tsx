import React, { FC } from 'react';
import { TabsProps } from './types';

import { StyledTabs } from './styled';

export const Tabs: FC<TabsProps> = (props, {
    ...restProps
}) => {
    return (
        <StyledTabs
            {...props}
            {...restProps}
        >
            {props.children}
        </StyledTabs>
    );
};
