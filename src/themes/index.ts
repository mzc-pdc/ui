import { createTheme, ThemeOptions } from '@mui/material/styles';
import { typography } from './typography';
import { palette } from './palette';
import {
  AccordionTheme,
  AlertTheme,
  AlertTitleTheme,
  AppBarTheme,
  AutocompleteTheme,
  AvatarTheme,
  AvatarGroupTheme,
  BackdropTheme,
  BadgeTheme,
  BottomNavigationTheme,
  BottomNavigationActionTheme,
  BreadcrumbsTheme,
  ButtonTheme,
  ButtonGroupTheme,
  CardTheme,
  CardActionAreaTheme,
  CardActionsTheme,
  CardContentTheme,
  CardHeaderTheme,
  CardMediaTheme,
  CheckboxTheme,
  ChipTheme,
  FilledInputTheme,
  FormControlTheme,
  FormControlLabelTheme,
  FormGroupTheme,
  FormHelperTextTheme,
  FormLabelTheme,
  IconButtonTheme,
  TextFieldTheme,
  InputLabelTheme,
  ListTheme,
  ListItemTheme,
  ListItemTextTheme,
  ListSubheaderTheme,
  ListItemAvatarTheme,
  ListItemSecondaryActionTheme,
  ListItemIconTheme,
  ListItemButtonTheme,
  MenuTheme,
  MenuItemTheme,
  MenuListTheme,
  OutlinedInputTheme,
  RadioTheme,
  RadioGroupTheme,
  SelectTheme,
  TableTheme,
  TableBodyTheme,
  TableCellTheme,
  TableContainerTheme,
  TableFooterTheme,
  TableHeadTheme,
  TablePaginationTheme,
  TableRowTheme,
  TableSortLabelTheme,
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
    MuiButtonGroup: { ...ButtonGroupTheme(defaultTheme) },
    MuiIconButton: { ...IconButtonTheme(defaultTheme) },
    MuiRadio: { ...RadioTheme(defaultTheme) },
    MuiRadioGroup: { ...RadioGroupTheme(defaultTheme) },
    MuiCheckbox: { ...CheckboxTheme(defaultTheme) },
    MuiChip: { ...ChipTheme(defaultTheme) },
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
    MuiMenu: { ...MenuTheme(defaultTheme) },
    MuiMenuItem: { ...MenuItemTheme(defaultTheme) },
    MuiMenuList: { ...MenuListTheme(defaultTheme) },
    MuiList: { ...ListTheme(defaultTheme) },
    MuiListItem: { ...ListItemTheme(defaultTheme) },
    MuiListItemAvatar: { ...ListItemAvatarTheme(defaultTheme) },
    MuiListItemButton: { ...ListItemButtonTheme(defaultTheme) },
    MuiListItemIcon: { ...ListItemIconTheme(defaultTheme) },
    MuiListItemSecondaryAction: {
      ...ListItemSecondaryActionTheme(defaultTheme),
    },
    MuiListItemText: { ...ListItemTextTheme(defaultTheme) },
    MuiListSubheader: { ...ListSubheaderTheme(defaultTheme) },
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
      ...AutocompleteTheme(defaultTheme),
    },
    MuiAccordion: {
      ...AccordionTheme(defaultTheme),
    },
    MuiBreadcrumbs: {
      ...BreadcrumbsTheme(defaultTheme),
    },
    MuiBottomNavigation: {
      ...BottomNavigationTheme(defaultTheme),
    },
    MuiBottomNavigationAction: {
      ...BottomNavigationActionTheme(defaultTheme),
    },
    MuiBadge: {
      ...BadgeTheme(defaultTheme),
    },
    MuiAlert: {
      ...AlertTheme(defaultTheme),
    },
    MuiAlertTitle: {
      ...AlertTitleTheme(defaultTheme),
    },
    MuiAppBar: {
      ...AppBarTheme(defaultTheme),
    },
    MuiAvatar: {
      ...AvatarTheme(defaultTheme),
    },
    MuiAvatarGroup: {
      ...AvatarGroupTheme(defaultTheme),
    },
    MuiBackdrop: {
      ...BackdropTheme(defaultTheme),
    },
    MuiCard: {
      ...CardTheme(defaultTheme),
    },
    MuiCardActionArea: {
      ...CardActionAreaTheme(defaultTheme)
    },
    MuiCardActions: {
      ...CardActionsTheme(defaultTheme)
    },
    MuiCardContent: {
      ...CardContentTheme(defaultTheme)
    },
    MuiCardHeader: {
      ...CardHeaderTheme(defaultTheme)
    },
    MuiCardMedia: {
      ...CardMediaTheme(defaultTheme)
    },
    MuiCssBaseline: {
      styleOverrides: () => ({}),
    },
  },
};

// Create a theme instance.
export const theme = createTheme(overrideTheme);

// process.env.NODE_ENV !== `production` &&
//   console.log(theme, '===================theme');
