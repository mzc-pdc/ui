import React, { FC } from 'react';

import { CollapseProps } from './types';

import { StyledCollapse } from './styled';

export const Collapse: FC<CollapseProps> = (props, { ...restProps }) => {
  return <StyledCollapse {...props} {...restProps} >{props.children}</StyledCollapse>;
};
