import { styled } from '@mui/material/styles';
import { ImageList as MuiImageList } from '@mui/material';
import { ImageListProps } from './types';

export const StyledImageList = styled(MuiImageList, {
  shouldForwardProp: prop => ![''].includes(String(prop)),
})<ImageListProps>(({ theme }) => ({

}));
