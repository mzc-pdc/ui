import { IconButtonProps as MuiIconButtonProps } from '@mui/material/IconButton/IconButton';
export interface IIconButtonProps extends MuiIconButtonProps {
  variant?: 'outlined' | 'contained';
  circled?: boolean;
}
