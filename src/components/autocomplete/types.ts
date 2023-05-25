import { AutocompleteProps as MuiAutocompleteProps } from '@mui/material';

export interface IAutocompleteProps
  extends MuiAutocompleteProps<
    any,
    boolean | undefined,
    boolean | undefined,
    boolean | undefined,
    React.ElementType | any
  > {}
