import React, { FC } from 'react';
import { FormControlProps } from '@mui/material';
import { StyledFormControl } from './styled';

export const FormControl: FC<FormControlProps> = React.forwardRef(
  (props, ref) => {
    return <StyledFormControl {...props} ref={ref} />;
  }
);

FormControl.displayName = 'FormControl';
