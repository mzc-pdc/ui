import * as React from 'react';
import { FC } from 'react';
import { StyledAutocomplete } from './styled';
import { IAutocompleteProps } from './types';

export const Autocomplete: FC<IAutocompleteProps> = React.forwardRef((props, ref) => {
  return <StyledAutocomplete {...props} ref={ref} />;
});

Autocomplete.displayName = "Autocomplete";