import React, { FC } from 'react';
import { StyledIconButton , Spinner } from './styled';
import { IconButtonProps } from './types';

export const IconButton: FC<IconButtonProps> = ({ children, ...props }) => {
  return <StyledIconButton {...props}>{children}
    {props.loading && (
        <Spinner
            size={props.size === 'xsmall' ? 10 : props.size === 'small' ? 16 : props.size === 'medium' ? 20 : 24}
            color={
              props.color
                  ? props.variant === 'contained'
                      ? 'inherit'
                      : props.color === 'inherit'
                          ? 'secondary'
                          : props.color
                  : `inherit`
            }
        />
    )}
  </StyledIconButton>;
};
