import React, { FC } from 'react';

import {BackdropProps} from "./types";
import {StyledBackdrop} from "./styled";


export const Backdrop: FC<BackdropProps> = React.forwardRef((props, ref) => {
  return (
      <StyledBackdrop
          {...props}
          ref={ref}
      />
  )
});

Backdrop.displayName = "Backdrop";