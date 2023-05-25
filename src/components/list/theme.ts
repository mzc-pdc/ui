import {Components} from '@mui/material/styles/components';

export const ListTheme = (
    theme: any
): Components['MuiList'] => ({
    defaultProps: {},
    styleOverrides: {
        root: ({ ownerState }) => ({
            ...(ownerState.size === 'large' && {
                '.MuiListCell-root': {
                    padding: `1rem`
                }
            }),
        }),}
})