import { CardHeader, styled } from '@mui/material';
import { CardHeaderProps } from './types';

export const StyledCardHeader = styled(CardHeader, {
    shouldForwardProp: prop => ![''].includes(String(prop)),
})<CardHeaderProps>(() => ({}));
