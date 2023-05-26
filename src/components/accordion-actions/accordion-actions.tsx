import * as React from 'react';
import { FC } from 'react';
import { StyledAccordionActions } from './styled';
import { AccordionActionsProps } from './types';

export const AccordionActions: FC<AccordionActionsProps> = (
    props,
    { ...restProps }
) => {
    return <StyledAccordionActions {...props} {...restProps}/>;
};
