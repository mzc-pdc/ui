import React, { FC } from 'react';

import { MenuProps } from '@mui/material';

import { StyledMenu } from './styled';

export const Menu: FC<MenuProps> = props => {
    return <StyledMenu {...props} />;
};