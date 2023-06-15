import React, { FC } from 'react';

import { MenuProps } from '@mui/material';

import { StyledMenu } from './styled';

export const Menu: FC<MenuProps> = React.forwardRef((props, ref) => {
    return <StyledMenu {...props} ref={ref}/>;
});

Menu.displayName = "Menu";