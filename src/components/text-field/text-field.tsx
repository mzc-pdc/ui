import React, { FC } from 'react';

import { StyledTextField, StyledFormControl, StyledFormHelperText } from './styled';
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

export const FormControl: FC<TextFieldProps> = (props, {
    ...restProps
}) => {
    return (
        <StyledFormControl
            {...props}
            {...restProps}
        />
    )
}
export const FormHelperText: FC<TextFieldProps> = (props, {
    ...restProps
}) => {
    return (
        <StyledFormHelperText
            {...props}
            {...restProps}
        />
    )
}

