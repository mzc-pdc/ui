import { createTheme, ThemeOptions } from '@mui/material/styles';
import { typography } from './typography';
import { palette } from './palette';
import {
  TableBodyTheme,
  TableCellTheme,
  ButtonTheme,
  IconButtonTheme,
  FilledInputTheme,
  OutlinedInputTheme,
  TextFieldTheme,
  FormControlTheme,
  FormControlLabelTheme,
  FormGroupTheme,
  FormHelperTextTheme,
  FormLabelTheme,
  TableContainerTheme,
  TableFooterTheme,
  TableHeadTheme,
  TablePaginationTheme,
  TableRowTheme,
  TableSortLabelTheme,
  TableTheme,
  InputLabelTheme,
  SelectTheme,
  AutocompleteTheme,
} from '../components';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true;
  }
}
export const defaultTheme: ThemeOptions = {
  breakpoints: {
    keys: [`xs`, `sm`, `md`, `lg`, `xl`, `xxl`],
    values: {
      xs: 0,
      sm: 600,
      md: 840,
      lg: 1024,
      xl: 1280,
      xxl: 1440,
    },
  },
  palette,
  typography,
  spacing: 4,
  shape: {
    borderRadius: 3,
  },
};

export const overrideTheme = {
  ...defaultTheme,
  components: {
    MuiButton: { ...ButtonTheme(defaultTheme) },
    MuiIconButton: { ...IconButtonTheme(defaultTheme) },
    MuiTextField: { ...TextFieldTheme(defaultTheme) },
    MuiOutlinedInput: { ...OutlinedInputTheme(defaultTheme) },
    MuiFilledInput: { ...FilledInputTheme(defaultTheme) },
    MuiFormControl: { ...FormControlTheme(defaultTheme) },
    MuiFormLabel: { ...FormLabelTheme(defaultTheme) },
    MuiFormGroup: { ...FormGroupTheme(defaultTheme) },
    MuiFormControlLabel: { ...FormControlLabelTheme(defaultTheme) },
    MuiFormHelperText: { ...FormHelperTextTheme(defaultTheme) },
    MuiInputLabel: { ...InputLabelTheme(defaultTheme) },
    MuiSelect: { ...SelectTheme(defaultTheme) },
    MuiCssBaseline: {
      styleOverrides: () => ({}),
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          padding: `12px 16px`,
          borderRadius: 6,
          '&:hover': {
            backgroundColor: `#f5f5f5`,
            '&.active': {
              backgroundColor: `transparent`,
            },
          },
          '.icon': {
            width: 24,
            height: 24,
            marginRight: 16,
          },
        },
      },
    },
    MuiTable: {
      ...TableTheme(defaultTheme),
    },
    MuiTableBody: {
      ...TableBodyTheme(defaultTheme),
    },
    MuiTableCell: {
      ...TableCellTheme(defaultTheme),
    },
    MuiTableContainer: {
      ...TableContainerTheme(defaultTheme),
    },
    MuiTableFooter: {
      ...TableFooterTheme(defaultTheme),
    },
    MuiTableHead: {
      ...TableHeadTheme(defaultTheme),
    },
    MuiTablePagination: {
      ...TablePaginationTheme(defaultTheme),
    },
    MuiTableRow: {
      ...TableRowTheme(defaultTheme),
    },
    MuiTableSortLabel: {
      ...TableSortLabelTheme(defaultTheme),
    },
    MuiAutocomplete: {
      ...AutocompleteTheme(defaultTheme)
    }
  },
};
// Create a theme instance.
export const theme = createTheme(overrideTheme);

// process.env.NODE_ENV !== `production` &&
//   console.log(theme, '===================theme');
