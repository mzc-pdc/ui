import { TooltipProps as MuiTooltipProps } from '@mui/material';

export interface TooltipProps extends MuiTooltipProps {
  // additional prop keys that do not exist in MuiThemeProps
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | undefined;
}
