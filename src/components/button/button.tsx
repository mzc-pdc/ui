import React, { FC, forwardRef } from 'react';

import type { ButtonProps } from '@mui/material';
import { StyledButton, Spinner, Text } from './styled';
import type { StyledButtonProps } from './types';

type ExtendedButtonProps = ButtonProps & StyledButtonProps;

const Search = forwardRef<HTMLInputElement>((props, ref) => {
  return <input ref={ref} type="search" />;
});
Search.displayName = 'Search';

export const Button: FC<ExtendedButtonProps> = ({
  children,
  type,
  variant,
  color,
  size,
  loading,
  fullWidth,
  ...restProps
}) => {
  return (
    <StyledButton
      {...restProps}
      type={type}
      variant={variant}
      color={color}
      size={size}
      fullWidth={fullWidth}
      loading={loading}
    >
      <Text className={'text'}>{children}</Text>
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
