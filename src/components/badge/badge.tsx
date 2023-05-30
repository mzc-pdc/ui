import React, { FC } from 'react';

import { BadgeProps } from './types';

import { StyledBadge } from './styled';

export const Badge: FC<BadgeProps> = (
    props,
    { ...restProps }) => {
  return <StyledBadge {...props} {...restProps} >{props.children}</StyledBadge>;
};

