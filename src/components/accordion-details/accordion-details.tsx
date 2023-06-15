import * as React from 'react';
import { FC } from 'react';
import { StyledAccordionDetails } from './styled';
import { AccordionDetailsProps } from './types';

export const AccordionDetails: FC<AccordionDetailsProps> = React.forwardRef((props, ref) => {
    return <StyledAccordionDetails {...props} ref={ref} />;
});

AccordionDetails.displayName = "AccordionDetails";
