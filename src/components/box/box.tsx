import React, { FC } from 'react';
import { BoxProps } from './types';

import { StyledBox } from './styled';

export const Box: FC<BoxProps> = (props, {
  ...restProps
}) => {
  return (
    <StyledBox
        {...props}
      {...restProps}
    >
      {props.children}
    </StyledBox>
  );
};
