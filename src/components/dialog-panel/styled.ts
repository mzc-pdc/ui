import { Drawer, styled} from '@mui/material';
import { DialogPanelProps } from './types';


export const StyledDialogPanel = styled(Drawer, {
    shouldForwardProp: prop => !['open'].includes(String(prop)),
})<DialogPanelProps>(({theme, open}) => ({

    '.MuiPaper-root': {
        position: `absolute`,
        top: 0,
        right: 0,
        bottom: 0,
        width: `48px`,
        padding: `8px`,
        boxSizing: `border-box`,
        overflowX: `hidden`,
        transition: `width 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms`,
        ...(open && {
            width: `336px`,
            padding: `0`,
            overflow: `overlay`,
        })
    },

}));
