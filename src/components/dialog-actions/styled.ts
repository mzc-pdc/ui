import { DialogActions, styled } from '@mui/material';
import { DialogActionsProps } from './types';

export const StyledDialogActions = styled(DialogActions, {
    shouldForwardProp: prop => ![''].includes(String(prop)),
})<DialogActionsProps>(() => ({}));
