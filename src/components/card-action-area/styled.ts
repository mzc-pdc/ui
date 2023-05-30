import { CardActionArea, styled } from '@mui/material';
import { CardActionAreaProps } from './types';

export const StyledCardActionArea = styled(CardActionArea, {
    shouldForwardProp: prop => ![''].includes(String(prop)),
})<CardActionAreaProps>(() => ({}));
