import { DialogContentText, styled } from '@mui/material';
import { DialogContentTextProps } from './types';

export const StyledDialogContentText = styled(DialogContentText, {
    shouldForwardProp: prop => ![''].includes(String(prop)),
})<DialogContentTextProps>(() => ({}));
