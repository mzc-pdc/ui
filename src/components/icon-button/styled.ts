import { IconButton as MuiIconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { IIconButtonProps } from './types';

const variantMixIn = ({ theme, variant }: any) => ({
  ...(variant === 'contained' && {
    backgroundColor: theme.palette.green[100],
  }),
  ...(variant === 'outlined' && {
    backgroundColor: theme.palette.red[100],
  }),
});

export const StyledIconButton = styled(MuiIconButton, {
  shouldForwardProp: prop => !['variant', 'circled'].includes(String(prop)),
})<IIconButtonProps>(({ theme, variant, circled }) => ({
  ...(variant !== undefined && variantMixIn({ theme, variant })),
  ...(circled === true && {
    border: `1px dashed #f00`,
  }),
}));
