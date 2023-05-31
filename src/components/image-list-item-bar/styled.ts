import { styled } from '@mui/material/styles';
import { ImageListItemBar as MuiImageListItemBar } from '@mui/material';
import { ImageListItemBarProps } from './types';

export const StyledImageListItemBar = styled(MuiImageListItemBar, {
  shouldForwardProp: prop => ![''].includes(String(prop)),
})<ImageListItemBarProps>(({ theme }) => ({

}));
