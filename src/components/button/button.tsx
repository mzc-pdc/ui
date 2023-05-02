import React, { FC } from 'react';

import { Button as MuiButton } from '@mui/material';

import type { ButtonProps } from '@mui/material';

import type { StyledButtonProps } from './types';

type ExtendedButtonProps = ButtonProps & StyledButtonProps;

export const Button: FC<ExtendedButtonProps> = ({
  children,
  type,
  loading,
  ...restProps
}) => {
  return <MuiButton {...restProps}>{children}</MuiButton>;
};
