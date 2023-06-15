import React, { FC } from 'react';

import { BreadcrumbsProps } from './types';

import { StyledBreadcrumbs } from './styled';

export const Breadcrumbs: FC<BreadcrumbsProps> = React.forwardRef((props, ref) => {
  return <StyledBreadcrumbs {...props} ref={ref}>{props.children}</StyledBreadcrumbs>;
});

Breadcrumbs.displayName = "Breadcrumbs";