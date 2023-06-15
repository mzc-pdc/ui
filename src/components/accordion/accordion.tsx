import * as React from 'react';
import { FC } from 'react';
import { StyledAccordion } from './styled';
import { AccordionProps } from './types';

export const Accordion: FC<AccordionProps> = React.forwardRef((props, ref) => {
    return <StyledAccordion {...props} ref={ref}>{props.children}</StyledAccordion>;
});

Accordion.displayName = "Accordion";