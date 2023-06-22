import { ChipProps as MuChipProps } from '@mui/material/Chip';

declare module '@mui/material/Chip' {
    export interface ChipPropsVariantOverrides{
        filter: true;
        search: true;
    }
}
export interface ChipProps extends MuChipProps {
    rounded?:boolean;
    active?: boolean;
}
