import {
    ButtonGroup as MuiButtonGroup,
} from '@mui/material';
import { styled } from '@mui/material/styles';

/* components */

/* types */
import { ExtendedButtonGroupProps} from './types';

export const StyledButtonGroup = styled(MuiButtonGroup, {
    shouldForwardProp: prop => ![''].includes(String(prop)),
})<ExtendedButtonGroupProps>(({ theme }) => ({

}));
