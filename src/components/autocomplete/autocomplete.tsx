import * as React from 'react';
import { FC } from 'react';
import { StyledAutocomplete } from './styled';
import { IAutocompleteProps } from './types';

export const Autocomplete: FC<IAutocompleteProps> = (
  props,
  { ...restProps }
) => {
  return <StyledAutocomplete {...props} {...restProps} />;
};
