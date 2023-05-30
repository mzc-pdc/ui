import { DialogProps as MuiDialogProps } from '@mui/material/Dialog';

export interface DialogProps extends MuiDialogProps {
    variant?: 'confirm' | 'alert' | 'simple' | 'option' | 'create',
    informationOpen?: boolean;
}
