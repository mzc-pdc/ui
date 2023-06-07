import React, { FC } from 'react';
import { TabProps } from './types';

import { StyledTab } from './styled';

export const Tab: FC<TabProps> = (props, {
    ...restProps
}) => {
    return (
        <StyledTab
            {...props}
            {...restProps}
       />
    );
};
