import {
    TextField as MuiTextField,
    FormControl as MuiFormControl,
    FormHelperText as MuiFormHelperText,
    OutlinedInput as MuiOutlinedInput,
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

export const StyledFormControl = styled(MuiFormControl)({});
export const StyledFormHelperText = styled(MuiFormHelperText)({});
export const StyledOutlinedInput = styled(MuiOutlinedInput)({});
export const StyledFilledInput = styled(MuiFilledInput)({});
