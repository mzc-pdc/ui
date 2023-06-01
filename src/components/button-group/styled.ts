import {
    ButtonGroup as MuiButtonGroup,
} from '@mui/material';
import { styled } from '@mui/material/styles';

/* components */

/* types */
import { ButtonGroupProps} from './types';

export const StyledButtonGroup = styled(MuiButtonGroup, {
    shouldForwardProp: prop => ![''].includes(String(prop)),
})<ButtonGroupProps>(({ theme }) => ({

}));
