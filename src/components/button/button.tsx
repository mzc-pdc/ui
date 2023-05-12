import React, { FC } from 'react';

import type { ButtonProps } from '@mui/material';
import {Typography} from "@mui/material";
import { StyledButton, Spinner, Children } from './styled';
import type { StyledButtonProps } from './types';

type ExtendedButtonProps = ButtonProps & StyledButtonProps;

export const Button: FC<ExtendedButtonProps> = ({
  children,
  variant,
  color,
  size,
  loading,
  fullWidth,
  ...restProps
}) => {
  return (
    <StyledButton
      variant={variant}
      color={color}
      size={size}
      fullWidth={fullWidth}
      loading={loading}
      {...restProps}
    >
      <Children style={{opacity: loading? 0:1}}>{children}</Children>
      {loading && (
        <Spinner
          size={size === 'small' ? 16 : size === 'medium' ? 20 : 24}
          color={
            color
              ? variant === 'contained'
                ? 'inherit'
                : color === 'inherit'
                ? 'secondary'
                : color
              : `inherit`
          }
        />
      )}
    </StyledButton>
  );
};
