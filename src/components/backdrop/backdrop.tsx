import React, { FC } from 'react';

import {BackdropProps} from "./types";
import {StyledBackdrop} from "./styled";


export const Backdrop: FC<BackdropProps> = (props, {
  ...restProps
}) => {
  return (
      <StyledBackdrop
          {...props}
          {...restProps}
      />
  )
}