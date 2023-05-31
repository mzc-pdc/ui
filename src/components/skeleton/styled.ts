import { styled } from '@mui/material/styles';
import { Skeleton as MuiSkeleton } from '@mui/material';
import { SkeletonProps } from './types';

export const StyledSkeleton = styled(MuiSkeleton, {
  shouldForwardProp: prop => ![''].includes(String(prop)),
})<SkeletonProps>(({ theme }) => ({

}));
