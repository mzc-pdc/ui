import {
    ToggleButton as MuiToggleButton,
    ToggleButtonGroup as MuiToggleButtonGroup,
} from '@mui/material';
import { styled } from '@mui/material/styles';

/* components */

/* types */
import { ExtendedToggleButtonProps, ExtendedToggleButtonGroupProps} from './types';

export const StyledToggleButton = styled(MuiToggleButton, {
    shouldForwardProp: prop => !['circled'].includes(String(prop)),
})<ExtendedToggleButtonProps>(({ theme }) => ({

}));


export const StyledToggleButtonGroup = styled(MuiToggleButtonGroup, {
    shouldForwardProp: prop => ![''].includes(String(prop)),
})<ExtendedToggleButtonGroupProps>(({ theme }) => ({

}));

