import {alpha} from "@mui/material";
import {Components} from "@mui/material/styles/components";

export const SelectTheme = (theme: any): Components["MuiSelect"] => (
    {
        defaultProps: {},
        styleOverrides: {
            select: {
                paddingTop: 8,
                paddingBottom: 8,
                minHeight: 24,
                lineHeight: 1.6,
                "&.MuiInputBase-inputSizeSmall": {
                    paddingTop: 4,
                    paddingBottom: 4,
                    paddingLeft: 0
                },
                "&.Mui-error": {
                    position: `relative`,
                    "&:after": {
                        content: "''",
                        position: `absolute`,
                        right: 40,
                        top: `50%`,
                        width: 16,
                        height: 16,
                        marginTop: `-8px`,
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16.001' height='16' viewBox='0 0 16.001 16'%3E%3Cpath d='M8 16a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8zM7 7v5h2V7zm0-3v2h2V4z' transform='rotate(180 8 8)' style='fill:%23ef4016'/%3E%3C/svg%3E")`
                    }
                }
            }
        },
    }
)
