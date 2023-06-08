import {Components} from "@mui/material/styles/components";

export const ToggleButtonTheme = (theme: any): Components["MuiToggleButton"]=> (
    {
        defaultProps: {},
        styleOverrides: {
            root: ({ ownerState }) => ({

            }),
        },
        variants: [
            {
                props: {
                    size: 'small',
                },
                style: {
                    width: 32,
                    height: 32
                },
            },
            {
                props: {
                    size: 'medium',
                },
                style: {
                    width: 40,
                    height: 40
                },
            },
            {
                props: {
                    size: 'large',
                },
                style: {
                    width: 56,
                    height: 56
                },
            },
        ],
    }
);

