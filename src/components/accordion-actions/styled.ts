import { AccordionActions, styled } from '@mui/material';
import { AccordionActionsProps } from './types';

export const StyledAccordionActions = styled(AccordionActions, {
    shouldForwardProp: prop => ![''].includes(String(prop)),
})<AccordionActionsProps>(() => ({}));
