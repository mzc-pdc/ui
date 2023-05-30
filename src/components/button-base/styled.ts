import {ButtonBase as MuiButtonBase} from '@mui/material';
import { styled } from '@mui/material/styles';
import { ButtonBaseProps } from './types';


export const StyledButtonBase = styled(MuiButtonBase, {
  shouldForwardProp: prop => ![''].includes(String(prop)),
})<ButtonBaseProps>(({theme}) => ({

}));
