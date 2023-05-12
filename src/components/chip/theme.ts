import {alpha} from "@mui/material";
import {Components} from "@mui/material/styles/components";

export const ChipTheme = (theme: any): Components["MuiChip"] => (
    {
        defaultProps: {},
        styleOverrides: {
            root: {
                "svg:first-of-type": {
                    marginLeft: theme.spacing - 1
                },
                ".MuiChip-label": {
                    "+ svg": {
                        marginRight: theme.spacing * 2
                    }
                },
                ".MuiChip-deleteIcon": {
                    color: theme.palette.grayscaleSecondary[200],
                    marginRight: theme.spacing * 2
                }
            }
        },
        variants: [
            {
                props: {
                    variant: "outlined"
                },
                style: {
                    borderColor: alpha(theme.palette.grayscaleSecondary.main, 0.4),
                    "&:hover": {
                        backgroundColor: alpha(theme.palette.grayscaleSecondary.main, 0.08)
                    },
                    "&:active": {
                        boxShadow: `none`,
                        backgroundColor: alpha(theme.palette.grayscaleSecondary.A100, 0.8)
                    },
                    "&.MuiChip-clickable": {
                        "&:hover": {
                            backgroundColor: alpha(theme.palette.grayscaleSecondary.main, 0.08)
                        }
                    }
                }
            },
            {
                props: {
                    variant: "outlined",
                    color: "error"
                },
                style: {
                    color: theme.palette.error.main,
                    borderColor: theme.palette.error.main,
                    "&:hover": {
                        backgroundColor: alpha(theme.palette.error.main, 0.08)
                    },
                    ".MuiChip-label": {
                        "+ svg": {
                            fill: theme.palette.error.main,
                            marginRight: theme.spacing * 2
                        }
                    },
                    ".MuiChip-deleteIcon": {
                        color: theme.palette.error.main
                    },
                    "&.MuiChip-clickable": {
                        "&:hover": {
                            backgroundColor: alpha(theme.palette.error.main, 0.08)
                        }
                    }
                }
            },
            {
                props: {
                    variant: "filled"
                },
                style: {
                    backgroundColor: alpha(theme.palette.grayscaleSecondary.A100, 0.4),
                    "&:hover": {
                        backgroundColor: alpha(theme.palette.grayscaleSecondary.A100, 0.6)
                    },
                    "&:active": {
                        boxShadow: `none`,
                        backgroundColor: alpha(theme.palette.grayscaleSecondary.A100, 0.8)
                    }
                }
            },
            {
                props: {
                    variant: "filled",
                    color: "error"
                },
                style: {
                    color: theme.palette.error.main,
                    backgroundColor: alpha(theme.palette.error.main, 0.1),
                    "&:hover": {
                        backgroundColor: alpha(theme.palette.error.main, 0.3)
                    },
                    ".MuiChip-label": {
                        "+ svg": {
                            color: theme.palette.error.main
                        }
                    },
                    ".MuiChip-deleteIcon": {
                        color: theme.palette.error.main
                    }
                }
            }
        ]
    }
)
