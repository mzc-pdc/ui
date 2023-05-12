import {alpha} from "@mui/material";
import {Components} from "@mui/material/styles/components";

export const CheckboxTheme = (theme: any): Components["MuiCheckbox"] => (
    {
        defaultProps: {},
        styleOverrides: {
            root: ({ ownerState }) => ({
                ...(ownerState && {
                    position: `relative`,
                    padding: `8px`,
                    "&:hover": {
                        backgroundColor: alpha(theme.palette.common.white, 0.08)
                    },
                    "&.Mui-disabled": {
                        "&.Mui-checked": {
                            "&:after": {
                                transform: `rotate(45deg) scale(1)`
                            }
                        }
                    },
                    "&.Mui-checked": {
                        "&:after": {
                            transform: `rotate(45deg) scale(1)`
                        }
                    },
                    "&:before": {
                        content: '""',
                        display: `inline-block`,
                        width: `18px`,
                        height: `18px`,
                        border: `2px solid ${theme.palette.secondary.light}`,
                        boxSizing: `border-box`,
                        borderRadius: `2px`,
                        borderColor: alpha(theme.palette.common.white, 0.6),
                        ...(ownerState.disabled && {
                            borderColor: alpha(theme.palette.secondary.light, 0.16)
                        }),
                        ...(ownerState.color === `default` && {
                            borderColor: theme.palette.secondary.light,
                            backgroundColor: theme.palette.common.white,
                            ...(ownerState.disabled && {
                                borderColor: alpha(theme.palette.secondary.main, 0.16)
                            })
                        })
                    },
                    "&:after": {
                        content: '""',
                        position: `absolute`,
                        display: `inline-block`,
                        width: `2.5px`,
                        height: `6px`,
                        transform: `rotate(45deg) scale(0)`,
                        marginTop: `-2px`,
                        borderBottomWidth: `2px`,
                        borderRightWidth: `2px`,
                        borderBottomStyle: `solid`,
                        borderRightStyle: `solid`,
                        borderColor: theme.palette.common.white,
                        transition: `transform .2s linear`,
                        ...(ownerState.checked && {
                            transform: `rotate(45deg) scale(1)`
                        }),
                        ...(ownerState.disabled && {
                            borderColor: alpha(theme.palette.common.white, 0.48)
                        }),
                        ...(ownerState.color === `default` && {
                            borderColor: theme.palette.secondary.main,
                            ...(ownerState.disabled && {
                                borderColor: alpha(theme.palette.secondary.main, 0.48)
                            })
                        })
                    },
                    "&.MuiCheckbox-indeterminate": {
                        "&:after": {
                            height: `0`,
                            width: `6px`,
                            marginTop: `0px`,
                            transform: `rotate(0) scale(1)`
                        }
                    },
                    svg: {
                        display: `none`
                    }
                })
            })
        },
    }
)
