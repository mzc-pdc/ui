import React, { FC } from 'react';
import { TabProps } from './types';

import { StyledTab } from './styled';

export const Tab: FC<TabProps> =  React.forwardRef((props, ref) => {
    return (
        <StyledTab
            {...props}
            ref={ref}
       />
    );
});

Tab.displayName = "Tab";