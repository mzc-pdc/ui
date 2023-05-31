import React, { FC } from 'react';
import { GrowProps } from './types';

import { StyledGrow } from './styled';

export const Grow: FC<GrowProps> = (props, {
  ...restProps
}) => {
  return (
    <StyledGrow
        {...props}
      {...restProps}
    >
      {props.children}
    </StyledGrow>
  );
};
