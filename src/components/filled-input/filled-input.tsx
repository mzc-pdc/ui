import React, { FC } from 'react';
import { FilledInputProps } from '@mui/material';
import { StyledFilledInput } from './styled';

export const FilledInput: FC<FilledInputProps> = React.forwardRef(
  (props, ref) => {
    return <StyledFilledInput {...props} ref={ref} />;
  }
);

FilledInput.displayName = 'FilledInput';
