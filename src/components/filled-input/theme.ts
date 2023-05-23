import {Components} from "@mui/material/styles/components";

export const FilledInputTheme = (theme: any): Components["MuiFilledInput"]=> (
    {
        defaultProps: {},
        styleOverrides: {
            root: {
                fontSize: `0.875rem`,
                borderRadius: theme.shape.borderRadius,
                "&:has(input[type='search'])": {
                    paddingLeft: `0.75rem`,
                    paddingRight: `0.5rem`,
                    "&:hover, &:focus, &.Mui-focused": {
                        backgroundColor: theme.palette.common.white,
                        outline: `1px solid ${theme.palette.primary.main}`
                    }
                },
                "&:before, &:after": {
                    content: `none`
                },
                input: {
                    padding: `0.6214rem 0.875rem`,
                    "&[type='search']": {
                        paddingLeft: 0,
                        paddingRight: 0,
                        "&::-webkit-search-cancel-button": {
                            appearance: `none`,
                            height: `20px`,
                            width: `20px`,
                            background: `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12' %3E%3Cpath d='M6 12a6 6 0 1 1 6-6 6.006 6.006 0 0 1-6 6zm0-4.943 2.12 2.12 1.06-1.06L7.063 6l2.121-2.124-1.06-1.06L6 4.936 3.881 2.815l-1.06 1.06L4.942 6 2.821 8.118l1.06 1.06L6 7.058z' fill='%23939bb7' /%3E%3C/svg%3E") no-repeat 50% 50%`,
                            backgroundSize: `12px 12px`,
                            cursor: `pointer`
                        }
                    }
                },
                ".MuiInputAdornment-positionStart": {
                    marginTop: `0 !important`
                },
            },
            sizeSmall: {
                input: {
                    padding: `0.3711rem 0.5rem`
                }
            },
            inputAdornedStart: {
                marginTop: `0 !important`
            }
        }
    }
)
