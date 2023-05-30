import { CardMedia, styled } from '@mui/material';
import { CardMediaProps } from './types';

export const StyledCardMedia = styled(CardMedia, {
    shouldForwardProp: prop => ![''].includes(String(prop)),
})<CardMediaProps>(() => ({}));
