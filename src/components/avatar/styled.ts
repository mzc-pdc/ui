import { styled } from '@mui/material/styles';
import { Avatar as MuiAvatar } from '@mui/material';
import { AvatarProps } from './types';

export const StyledAvatar = styled(MuiAvatar, {
  shouldForwardProp: prop => ![''].includes(String(prop)),
})<AvatarProps>(({ theme }) => ({

}));
