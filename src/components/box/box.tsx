import React, { FC } from 'react';
import { BoxProps } from './types';

import { StyledBox } from './styled';

export const Box: FC<BoxProps>  = React.forwardRef((props, ref) => {
  return (
    <StyledBox
        {...props}
        ref={ref}
    >
      {props.children}
    </StyledBox>
  );
});

Box.displayName = "Box";