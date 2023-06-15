import React, { FC } from 'react';

import { StyledTextField } from './styled';
import { TextFieldProps } from './types';

export const TextField: FC<TextFieldProps> = React.forwardRef((props, ref) => {
  return (
      <StyledTextField
          {...props}
          ref={ref}
      />
  )
});

TextField.displayName = "TextField";