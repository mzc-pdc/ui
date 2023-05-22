import {
    Fab as MuiFab,
} from '@mui/material';
import { styled } from '@mui/material/styles';

/* components */

/* types */
import { ExtendedFabProps} from './types';

export const StyledFab = styled(MuiFab, {
    shouldForwardProp: prop => ![''].includes(String(prop)),
})<ExtendedFabProps>(({ theme }) => ({

}));
