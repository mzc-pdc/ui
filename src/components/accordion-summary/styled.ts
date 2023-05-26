import { AccordionSummary, styled } from '@mui/material';
import { AccordionSummaryProps } from './types';

export const StyledAccordionSummary = styled(AccordionSummary, {
    shouldForwardProp: prop => ![''].includes(String(prop)),
})<AccordionSummaryProps>(() => ({}));
