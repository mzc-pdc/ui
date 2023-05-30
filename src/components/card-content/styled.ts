import { CardContent, styled } from '@mui/material';
import { CardContentProps } from './types';

export const StyledCardContent = styled(CardContent, {
    shouldForwardProp: prop => ![''].includes(String(prop)),
})<CardContentProps>(() => ({}));
