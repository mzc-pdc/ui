import {Components} from "@mui/material/styles/components";

export const OutlinedInputTheme = (theme: any): Components["MuiOutlinedInput"]=> (
    {
        defaultProps: {},
        styleOverrides: {
            root: {
                fontSize: `0.875rem`,
                borderRadius: theme.shape.borderRadius,
                backgroundColor: theme.palette.common.white,
                "&:hover": {
                    ".MuiOutlinedInput-notchedOutline": {
                        borderColor: theme.palette.primary.main
                    }
                },
                input: {
                    padding: `0.6214rem 0.875rem`,
                    "&[type='search']": {
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

                "&:has(input[type='search'])": {
                    input: {
                        paddingLeft: 0
                    },
                    ".MuiInputAdornment-positionStart": {
                        width: 16,
                        transition: `width 0.2s linear`
                    }
                },
                "&:active, &:focus, &.Mui-focused": {
                    "&:has(input[type='search'])": {
                        ".MuiInputAdornment-positionStart": {
                            width: 0,
                            height: 0,
                            overflow: `hidden`
                        }
                    }
                }
            },
            sizeSmall: {
                input: {
                    padding: `0.3711rem 0.5rem`
                }
            },
            notchedOutline: {
                borderWidth: `1px !important`,
                borderColor: theme.palette.secondary[300]
            },
            multiline: {
                height: `auto`,
                minHeight: 88,
                padding: theme.spacing * 2,
                alignItems: `flex-start`,
                borderRadius: 2
            }
        }
    }
);

