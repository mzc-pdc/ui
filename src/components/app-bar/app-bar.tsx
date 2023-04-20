import React, { FC } from 'react';
import { IAppBarProps } from './types';

import { StyledAppBar } from './styled';

export const AppBar: FC<IAppBarProps> = ({
  children,
  position,
  color,
  htmlColor,
  ...restProps
}) => {
  return (
    <StyledAppBar
      {...restProps}
      color={color}
      htmlColor={htmlColor}
      position={position}
    >
      {children}
    </StyledAppBar>
  );
};
