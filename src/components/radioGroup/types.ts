import {
    RadioGroupProps as MuiRadioGroupProps,
} from '@mui/material';

export interface StyledRadioGroupProps  {
    row?: boolean
}

export type ExtendedRadioGroupProps = MuiRadioGroupProps & StyledRadioGroupProps;