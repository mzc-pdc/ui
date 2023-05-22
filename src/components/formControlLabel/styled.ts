import {
    FormControlLabel as MuiFormControlLabel,
} from '@mui/material';
import { styled } from '@mui/material/styles';

/* components */

/* types */
import { ExtendedFormControlLabelProps } from './types';

export const StyledFormControlLabel = styled(MuiFormControlLabel, {
    shouldForwardProp: prop => ![''].includes(String(prop)),
})<ExtendedFormControlLabelProps>(({ theme }) => ({

}));
