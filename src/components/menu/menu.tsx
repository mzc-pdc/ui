import React, { FC } from 'react';

import { MenuProps } from '@mui/material';

import { StyledMenu } from './styled';

export const Menu: FC<MenuProps> = ({ ...restProps }) => {
    return <StyledMenu {...restProps} />;
};