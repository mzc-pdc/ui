import {
    TextField as MuiTextField,
    FilledInput as MuiFilledInput,
} from '@mui/material';
import {TextFieldProps as MuiTextFieldProps} from '@mui/material/TextField/TextField';
import { styled } from '@mui/material/styles';

import {TextFieldProps} from './types';

export const StyledTextField = styled(MuiTextField, {
    shouldForwardProp: prop =>
        !['isEdit'].includes(String(prop)),
})<MuiTextFieldProps & TextFieldProps>(({theme, isEdit}) => ({
    ...(isEdit && {
        '.MuiInputBase-root': {
            '&:after': {
                borderColor:  theme.palette.primary.main,
                transform: `scaleX(1)`
            }
        },
        '.MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.primary.main
        },
        '.MuiFilledInput-root' : {
            outline: `1px solid ${theme.palette.primary.main}`
        }
    })
}));

export const StyledFilledInput = styled(MuiFilledInput)({});
