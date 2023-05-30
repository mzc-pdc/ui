import { DialogTitle, styled } from '@mui/material';
import { DialogTitleProps } from './types';

export const StyledDialogTitle = styled(DialogTitle, {
    shouldForwardProp: prop => ![''].includes(String(prop)),
})<DialogTitleProps>(() => ({
}));
