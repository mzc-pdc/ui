import * as React from 'react';
import { FC } from 'react';
import { StyledAccordionSummary } from './styled';
import { AccordionSummaryProps } from './types';

export const AccordionSummary: FC<AccordionSummaryProps>  = React.forwardRef((props, ref) => {
    return <StyledAccordionSummary {...props} ref={ref} />;
});

AccordionSummary.displayName = "AccordionSummary";