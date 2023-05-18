import React, { FC } from 'react';
import { ExtendedButtonProps, StyledButton } from './styled';

export const Button: FC<ExtendedButtonProps> = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};
