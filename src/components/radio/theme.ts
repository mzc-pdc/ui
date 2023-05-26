import {alpha} from "@mui/material";
import {Components} from "@mui/material/styles/components";

export const RadioTheme = (theme: any): Components["MuiRadio"] => (
    {
        defaultProps: {},
        styleOverrides: {
            root: ({ownerState}) => ({
                padding: 8,
                input: {
                    "+ span": {
                        display: `inline-flex`,
                        alignItems: `center`,
                        justifyContent: `center`,
                        width: 16,
                        height: 16,
                        borderWidth: 2,
                        borderStyle: "solid",
                        borderRadius: 16,
                        borderColor: theme.palette.secondary[300],
                        boxSizing: `border-box`,
                        svg: {
                            display: `none`
                        }
                    }
                },
                "&.Mui-checked": {
                    input: {
                        "+ span": {
                            "&:before": {
                                content: '""',
                                display: `block`,
                                width: 8,
                                height: 8,
                                borderRadius: 8,
                                backgroundColor: ownerState.color
                                    ? theme.palette[ownerState.color].main
                                    : theme.palette.secondary.main
                            }
                        }
                    }
                },
                "&.Mui-disabled": {
                    input: {
                        "+ span": {
                            borderColor: ownerState.color && ownerState.color === 'white' ? alpha(theme.palette.white.main, 0.16) : alpha(theme.palette.secondary.main, 0.16),
                            "&:before": {
                                backgroundColor: ownerState.color && ownerState.color === 'white' ? alpha(theme.palette.white.main, 0.48) : alpha(
                                    theme.palette.secondary.main,
                                    0.48
                                )
                            }
                        }
                    }
                }
            })
        },
    }
)
