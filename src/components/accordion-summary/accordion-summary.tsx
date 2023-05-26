import * as React from 'react';
import { FC } from 'react';
import { StyledAccordionSummary } from './styled';
import { AccordionSummaryProps } from './types';

export const AccordionSummary: FC<AccordionSummaryProps> = (
    props,
    { ...restProps }
) => {
    return <StyledAccordionSummary {...props} {...restProps}/>;
};
