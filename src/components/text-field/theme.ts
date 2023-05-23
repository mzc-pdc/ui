import {Components} from "@mui/material/styles/components";

export const TextFieldTheme = (theme: any): Components["MuiTextField"] => (
    {
        defaultProps: {},
        styleOverrides: {
            root: {
                ".MuiFormLabel-root": {
                    transform: `translate(14px, 11px) scale(1)`,
                    "&.MuiInputLabel-shrink": {
                        transform: `translate(14px, -9px) scale(0.75)`
                    }
                }
            }
        },
        variants: [
            {
                props: {
                    size: "small"
                },
                style: {
                    ".MuiFormLabel-root": {
                        transform: `translate(8px, 6px) scale(1)`,
                        "&.MuiInputLabel-shrink": {
                            transform: `translate(14px, -9px) scale(0.75)`
                        }
                    }
                }
            },
            {
                props: { multiline: true },
                style: {
                    "&:has(.MuiInputBase-multiline)": {
                        "+ .MuiFormHelperText-root": {
                            position: `absolute`,
                            right: 0,
                            bottom: 10,
                            color: theme.palette.secondary[400]
                        },
                        "&:has(.MuiFormHelperText-root)": {
                            "+ .MuiFormHelperText-root": {
                                position: `absolute`,
                                right: 0,
                                bottom: 40
                            },
                            "&:has(.Mui-error)": {
                                "+ .MuiFormHelperText-root": {
                                    position: `absolute`,
                                    right: 0,
                                    bottom: 40,
                                    color: theme.palette.error.main
                                }
                            }
                        }
                    }
                }
            }
        ]
    }
)
