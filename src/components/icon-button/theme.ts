import { Components } from '@mui/material/styles/components';

export const IconButtonTheme = (
  theme: any
): Components['MuiIconButton'] => ({
  defaultProps: {},
  styleOverrides: {
    root: ({ ownerState }) => ({
      borderRadius: theme.borderRadius,
      ...(ownerState.size === 'xsmall' && {
        width: 18,
        height: 18,
      }),
    }),
    sizeSmall: {
      width: 24,
      height: 24,
    },
    sizeMedium: {
      width: 32,
      height: 32,
    },
    sizeLarge: {
      width: 40,
      height: 40,
    },
  },
});
