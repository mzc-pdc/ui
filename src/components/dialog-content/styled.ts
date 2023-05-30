import { DialogContent, styled } from '@mui/material';
import { DialogContentProps } from './types';

export const StyledDialogContent = styled(DialogContent, {
    shouldForwardProp: prop => ![''].includes(String(prop)),
})<DialogContentProps>(() => ({}));
