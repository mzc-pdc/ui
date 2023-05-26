import { ToolbarProps as MuiToolbarProps } from '@mui/material';

export interface ToolbarProps extends MuiToolbarProps {
  // additional prop keys that do not exist in MuiThemeProps
  htmlColor?: string | undefined;
}
