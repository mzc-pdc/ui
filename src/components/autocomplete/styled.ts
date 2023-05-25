import { Autocomplete, styled } from '@mui/material';
import { IAutocompleteProps } from './types';

export const StyledAutocomplete = styled(Autocomplete, {
  shouldForwardProp: prop => ![''].includes(String(prop)),
})<IAutocompleteProps>(() => ({}));
