import * as React from 'react';
import { FC } from 'react';
import { StyledAccordionDetails } from './styled';
import { AccordionDetailsProps } from './types';

export const AccordionDetails: FC<AccordionDetailsProps> = (
    props,
    { ...restProps }
) => {
    return <StyledAccordionDetails {...props} {...restProps}/>;
};
