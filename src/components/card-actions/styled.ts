import { CardActions, styled } from '@mui/material';
import { CardActionsProps } from './types';

export const StyledCardActions = styled(CardActions, {
    shouldForwardProp: prop => ![''].includes(String(prop)),
})<CardActionsProps>(() => ({}));
