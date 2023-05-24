import {Components} from "@mui/material/styles/components";

export const TextFieldTheme = (theme: any): Components["MuiTextField"] => (
    {
        defaultProps: {},
        styleOverrides: {
        },
        variants: [
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
