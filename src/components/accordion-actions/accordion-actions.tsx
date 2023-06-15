import * as React from 'react';
import { FC } from 'react';
import { StyledAccordionActions } from './styled';
import { AccordionActionsProps } from './types';

export const AccordionActions: FC<AccordionActionsProps> = React.forwardRef((props, ref) => {
    return <StyledAccordionActions {...props} ref={ref}/>;
});

AccordionActions.displayName = "AccordionActions";