import { AccordionDetails, styled } from '@mui/material';
import { AccordionDetailsProps } from './types';

export const StyledAccordionDetails = styled(AccordionDetails, {
    shouldForwardProp: prop => ![''].includes(String(prop)),
})<AccordionDetailsProps>(() => ({}));
