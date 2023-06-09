import { styled } from '@mui/material/styles';
import { AvatarGroup as MuiAvatarGroup } from '@mui/material';
import { AvatarGroupProps } from './types';

export const StyledAvatarGroup = styled(MuiAvatarGroup, {
  shouldForwardProp: prop => ![''].includes(String(prop)),
})<AvatarGroupProps>(({ theme, color }) => ({

}));
