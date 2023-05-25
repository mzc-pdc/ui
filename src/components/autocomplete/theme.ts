import {alpha} from "@mui/material";
import {Components} from "@mui/material/styles/components";

export const AutocompleteTheme = (theme: any): Components["MuiAutocomplete"] => (
    {
        defaultProps: {},
        styleOverrides: {
            root: ({ ownerState }) => ({
                ".MuiInputBase-root": {
                    gap: theme.spacing * 2,
                    ".MuiAutocomplete-input": {
                        padding: `0.95px 4px 0.95px 5px`
                    }
                }
            }),
            endAdornment: {
                top: `calc(50% - 1rem)`
            },
            tag: {
                margin: 0,
                "&:not(div)": {
                    color: theme.palette.primary.contrastText,
                    backgroundColor: theme.palette.primary.main,
                    paddingLeft: theme.spacing * 2,
                    paddingRight: theme.spacing * 2,
                    borderRadius: theme.spacing * 4
                }
            },
            popper: {
                ".MuiAutocomplete-listbox": {
                    ".MuiAutocomplete-option": {
                        minHeight: `40px`,
                        "&:hover, &.Mui-focused": {
                            backgroundColor: alpha(
                                theme.palette.secondary.main,
                                0.08
                            )
                        },
                        "&.Mui-selected": {
                            backgroundColor: alpha(theme.palette.grayscaleSecondary.A100, 0.5)
                        }
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
                    ".MuiInputBase-root": {
                        "&.MuiInputBase-sizeSmall": {
                            paddingTop: 0,
                            paddingBottom: 0
                        }
                    }
                }
            }
        ]
    }
)
