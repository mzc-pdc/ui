import React, { FC } from 'react';

import { BreadcrumbsProps } from './types';

import { StyledBreadcrumbs } from './styled';

export const Breadcrumbs: FC<BreadcrumbsProps> = (props,{ ...restProps }) => {
  return <StyledBreadcrumbs {...props} {...restProps} >{props.children}</StyledBreadcrumbs>;
};
