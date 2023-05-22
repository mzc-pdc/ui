import React, { FC } from 'react';

import { StyledIconButton, Spinner } from './styled';
import {ExtendedIconButtonProps} from "./types";

export const IconButton: FC<ExtendedIconButtonProps> = ( props,{
  ...restProps
}) => {
  return (
    <StyledIconButton
        {...props}
        {...restProps}

    >
      {props.children}
      {props.loading && (
        <Spinner
          size={props.size === 'small' ? 16 : props.size === 'medium' ? 20 : 24}
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
    </StyledIconButton>
  );
};
