import {Components} from "@mui/material/styles/components";

export const SelectTheme = (theme: any): Components["MuiSelect"] => (
    {
      defaultProps: {},
      styleOverrides: {
        select: {
          paddingTop: `0.6214rem `,
          paddingBottom: `0.6214rem`,
          "&.MuiInputBase-inputSizeSmall": {
            paddingTop: `0.3711rem`,
            paddingBottom: `0.3711rem`,
            paddingLeft: `0.5rem`,
          },

        }
      },
    }
)
