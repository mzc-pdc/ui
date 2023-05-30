import { Card, styled } from '@mui/material';
import { CardProps } from './types';

export const StyledCard = styled(Card, {
    shouldForwardProp: prop => ![''].includes(String(prop)),
})<CardProps>(() => ({}));
