import { Accordion, styled } from '@mui/material';
import { AccordionProps } from './types';

export const StyledAccordion = styled(Accordion, {
    shouldForwardProp: prop => ![''].includes(String(prop)),
})<AccordionProps>(() => ({}));
