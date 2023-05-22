import {
    RadioGroup as MuiRadioGroup,
} from '@mui/material';
import { styled } from '@mui/material/styles';

import { ExtendedRadioGroupProps} from './types';

export const StyledRadioGroup = styled(MuiRadioGroup, {
    shouldForwardProp: prop => ![''].includes(String(prop)),
})<ExtendedRadioGroupProps>(({ theme }) => ({

}));
