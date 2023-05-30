import { AppBarProps as MuiAppBarProps } from '@mui/material';

export interface AppBarProps extends MuiAppBarProps {
  // additional prop keys that do not exist in MuiThemeProps
  htmlColor?: string | undefined;
}
