import { CheckboxProps as MuCheckboxProps } from '@mui/material/Checkbox';

declare module '@mui/material/Checkbox' {
    export interface CheckboxPropsColorOverrides {
        white: true;
    }
}
export interface CheckboxProps extends MuCheckboxProps {
}
