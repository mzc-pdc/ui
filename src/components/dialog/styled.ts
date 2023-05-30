import { Dialog, styled } from '@mui/material';
import { DialogProps } from './types';


const variantMixIn = ({ theme, variant }: any) => ({
    ...(variant === 'confirm' && {
        minWidth: `480px`,
        maxWidth: `1062px`,
        // width: `${width}px`,
        padding: `1.5rem`,
        boxShadow: `0 3px 6px 0 rgba(0, 0, 0, 0.24)`,
        borderRadius: `2px`,
        boxSizing: `border-box`,
        '.MuiDialogTitle-root': {
            fontSize: `1.125rem`,
            fontWeight: `bold`,
            padding: 0,
        },
        '.MuiDialogContent-root': {
            paddingTop: `2rem`,
            paddingBottom: `2rem`,
            paddingLeft: 0,
            paddingRight: 0,
        },
        '.MuiDialogActions-root': {
            padding: 0,
            button: {
                '+ button': {
                    marginLeft: `0.375rem`,
                },
            },
        },
    }),
    ...(variant === 'alert' && {
        minWidth: `340px`,
        maxWidth: `1062px`,
        // width: `${width}px`,
        padding: `1.5rem`,
        boxShadow: `0 3px 6px 0 rgba(0, 0, 0, 0.24)`,
        borderRadius: `2px`,
        boxSizing: `border-box`,
        '.MuiDialogTitle-root': {},
        '.MuiDialogContent-root': {
            paddingTop: 0,
            paddingBottom: `2rem`,
            paddingLeft: 0,
            paddingRight: 0,
            fontSize: `1rem`,
            fontWeight: `500`,
        },
        '.MuiDialogActions-root': {
            padding: 0,
            button: {
                '+ button': {
                    marginLeft: `4px`,
                },
            },
        },
    }),
    ...(variant === 'simple' && {
        minWidth: `220px`,
        maxWidth: `540px`,
        // width: `${width}px`,
        padding: `1.250rem`,
        border: `1px solid ${theme.palette.secondary[600]}`,
        boxShadow: `0 2px 4px 0 rgba(0, 0, 0, 0.24)`,
        borderRadius: `2px`,
        boxSizing: `border-box`,
        '.MuiDialogTitle-root': {
            fontSize: `0.938rem`,
            fontWeight: `bold`,
        },
        '.MuiDialogContent-root': {
            paddingTop: `1.5rem`,
            paddingBottom: `1.5rem`,
        },
        '.MuiDialogActions-root': {},

    }),
    ...(variant === 'option' && {

        minWidth: `660px`,
        maxWidth: `1280px`,
    }),
    ...(variant === 'create' && {
        border: `1px solid ${theme.palette.secondary[600]}`,
        boxShadow: `0 2px 4px 0 rgba(0, 0, 0, 0.24)`,
        borderRadius: `2px`,
        margin: `3.75rem`,
        maxHeight: `calc(100% - 120px)`,
        maxWidth: `1280px`,
        minWidth: `768px`,
        // width: `${width}px`,
        boxSizing: `border-box`,
        '.MuiDialogTitle-root': {
            minHeight: `4.5rem`,
            padding: `1.5rem`,
            boxSizing: `border-box`,
            '.MuiTypography-root': {
                fontSize: `1.125rem`
            }
        },
        '.MuiDialogContent-root': {
            padding: `0.5rem 1.5rem 1.5rem`,
        },
        '.MuiDialogActions-root': {
            padding: `1.5rem`,
            borderTop: `1px solid ${theme.palette.secondary[100]}`,
        },
    }),
})
export const StyledDialog = styled(Dialog, {
    shouldForwardProp: prop => !['variant', 'informationOpen'].includes(String(prop)),
})<DialogProps>(({theme, variant, informationOpen}) => ({

    '.MuiDialog-container': {
        '> .MuiPaper-root': {
            '.MuiDialogTitle-root': {
                padding: `1.5rem`
            },
            '.MuiDialogActions-root': {
                padding: `1.5rem`
            },
            ...(variant !== undefined && variantMixIn({theme, variant})),
            '&:has(.MuiDrawer-root)': {
                paddingRight: `3rem`,
                transition: `padding 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms`,
                ...(informationOpen && {
                    paddingRight: `336px`,
                })
            },
        }
    }
}));
