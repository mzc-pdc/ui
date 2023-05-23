import React, { FC } from 'react';

import { StyledTextField } from './styled';
import { TextFieldProps } from './types';

export const TextField: FC<TextFieldProps> = (props, {
  ...restProps
}) => {
  return (
      <StyledTextField
          {...props}
          {...restProps}
      />
  )
}