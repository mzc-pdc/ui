import React, { FC } from 'react';
import { AppBarProps } from './types';

import { StyledAppBar } from './styled';

export const AppBar: FC<AppBarProps> = (props, {
  ...restProps
}) => {
  return (
    <StyledAppBar
      {...props}
      {...restProps}
    >
      {props.children}
    </StyledAppBar>
  );
};
