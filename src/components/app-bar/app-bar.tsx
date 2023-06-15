import React, { FC } from 'react';
import { AppBarProps } from './types';

import { StyledAppBar } from './styled';

export const AppBar: FC<AppBarProps>  = React.forwardRef((props, ref) => {
  return (
    <StyledAppBar
      {...props}
      ref={ref}
    >
      {props.children}
    </StyledAppBar>
  );
});


AppBar.displayName = "AppBar";