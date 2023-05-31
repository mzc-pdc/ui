import { styled } from '@mui/material/styles';
import { ImageListItem as MuiImageListItem } from '@mui/material';
import { ImageListItemProps } from './types';

export const StyledImageListItem = styled(MuiImageListItem, {
  shouldForwardProp: prop => ![''].includes(String(prop)),
})<ImageListItemProps>(({ theme }) => ({

}));
