import * as React from 'react';
import { FC } from 'react';
import { StyledAccordion } from './styled';
import { AccordionProps } from './types';

export const Accordion: FC<AccordionProps> = (
    props,
    { ...restProps }
) => {
    return <StyledAccordion {...props} {...restProps} >{props.children}</StyledAccordion>;
};
