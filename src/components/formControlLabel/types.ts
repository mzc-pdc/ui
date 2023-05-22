import {
    FormControlLabelProps as MuiFormControlLabelProps,
} from '@mui/material';
import {ReactNode} from "react";



export interface StyledFormControlLabelProps  {
    control?: ReactNode
}

export type ExtendedFormControlLabelProps = MuiFormControlLabelProps & StyledFormControlLabelProps;