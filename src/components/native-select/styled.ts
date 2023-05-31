import { styled } from '@mui/material/styles';
import { NativeSelect as MuiNativeSelect } from '@mui/material';
import { NativeSelectProps } from './types';

export const StyledNativeSelect = styled(MuiNativeSelect, {
  shouldForwardProp: prop => ![''].includes(String(prop)),
})<NativeSelectProps>(({ theme }) => ({

}));
