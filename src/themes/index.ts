import { createTheme, ThemeOptions } from '@mui/material/styles';
import { typography } from './typography';
import { palette } from './palette';
import {
  AccordionTheme,
  AccordionActionsTheme,
  AccordionDetailsTheme,
  AccordionSummaryTheme,
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
  ButtonBaseTheme,
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
  InputTheme,
  InputBaseTheme,
  InputAdornmentTheme,
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
  SwitchTheme,
  TableTheme,
  TableBodyTheme,
  TableCellTheme,
  TableContainerTheme,
  TableFooterTheme,
  TableHeadTheme,
  TablePaginationTheme,
  TableRowTheme,
  TableSortLabelTheme,
  CircularProgressTheme,
  LinearProgressTheme,
  CollapseTheme,
  ContainerTheme,
  DividerTheme,
  DialogTheme,
  DialogActionsTheme,
  DialogContentTheme,
  DialogContentTextTheme,
  DialogTitleTheme,
  ToolbarTheme,
  DrawerTheme,
  FabTheme,
  GridTheme,
  ImageListTheme,
  ImageListItemTheme,
  ImageListItemBarTheme,
  LinkTheme,
  ModalTheme,
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
    MuiAccordion: { ...AccordionTheme(defaultTheme) },
    MuiAccordionActions: { ...AccordionActionsTheme(defaultTheme) },
    MuiAccordionDetails: { ...AccordionDetailsTheme(defaultTheme) },
    MuiAccordionSummary: { ...AccordionSummaryTheme(defaultTheme) },
    MuiAlert: { ...AlertTheme(defaultTheme) },
    MuiAlertTitle: { ...AlertTitleTheme(defaultTheme) },
    MuiAppBar: { ...AppBarTheme(defaultTheme) },
    MuiAutocomplete: { ...AutocompleteTheme(defaultTheme) },
    MuiAvatar: { ...AvatarTheme(defaultTheme) },
    MuiAvatarGroup: { ...AvatarGroupTheme(defaultTheme) },
    MuiBackdrop: { ...BackdropTheme(defaultTheme) },
    MuiBadge: { ...BadgeTheme(defaultTheme) },
    MuiBottomNavigation: { ...BottomNavigationTheme(defaultTheme) },
    MuiBottomNavigationAction: { ...BottomNavigationActionTheme(defaultTheme) },
    MuiBreadcrumbs: { ...BreadcrumbsTheme(defaultTheme) },
    MuiButton: { ...ButtonTheme(defaultTheme) },
    MuiButtonBase: { ...ButtonBaseTheme(defaultTheme) },
    MuiButtonGroup: { ...ButtonGroupTheme(defaultTheme) },
    MuiCard: { ...CardTheme(defaultTheme) },
    MuiCardActionArea: { ...CardActionAreaTheme(defaultTheme) },
    MuiCardActions: { ...CardActionsTheme(defaultTheme) },
    MuiCardContent: { ...CardContentTheme(defaultTheme) },
    MuiCardHeader: { ...CardHeaderTheme(defaultTheme) },
    MuiCardMedia: { ...CardMediaTheme(defaultTheme) },
    MuiCheckbox: { ...CheckboxTheme(defaultTheme) },
    MuiChip: { ...ChipTheme(defaultTheme) },
    MuiCircularProgress: { ...CircularProgressTheme(defaultTheme) },
    MuiCollapse: { ...CollapseTheme(defaultTheme) },
    MuiContainer: { ...ContainerTheme(defaultTheme) },
    MuiDialog: { ...DialogTheme(defaultTheme) },
    MuiDialogActions: { ...DialogActionsTheme(defaultTheme) },
    MuiDialogContent: { ...DialogContentTheme(defaultTheme) },
    MuiDialogContentText: { ...DialogContentTextTheme(defaultTheme) },
    MuiDialogTitle: { ...DialogTitleTheme(defaultTheme) },
    MuiDivider: { ...DividerTheme(defaultTheme) },
    MuiDrawer: { ...DrawerTheme(defaultTheme) },
    MuiFab: { ...FabTheme(defaultTheme) },
    MuiFilledInput: { ...FilledInputTheme(defaultTheme) },
    MuiFormControl: { ...FormControlTheme(defaultTheme) },
    MuiFormControlLabel: { ...FormControlLabelTheme(defaultTheme) },
    MuiFormGroup: { ...FormGroupTheme(defaultTheme) },
    MuiFormHelperText: { ...FormHelperTextTheme(defaultTheme) },
    MuiFormLabel: { ...FormLabelTheme(defaultTheme) },
    MuiGrid: { ...GridTheme(defaultTheme) },
    MuiIconButton: { ...IconButtonTheme(defaultTheme) },
    MuiImageList: { ...ImageListTheme(defaultTheme) },
    MuiImageListItem: { ...ImageListItemTheme(defaultTheme) },
    MuiImageListItemBar: { ...ImageListItemBarTheme(defaultTheme) },
    MuiInput: { ...InputTheme(defaultTheme) },
    MuiInputAdornment: { ...InputAdornmentTheme(defaultTheme) },
    MuiInputBase: { ...InputBaseTheme(defaultTheme) },
    MuiInputLabel: { ...InputLabelTheme(defaultTheme) },
    MuiLinearProgress: { ...LinearProgressTheme(defaultTheme) },
    MuiLink: { ...LinkTheme(defaultTheme) },
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
    MuiMenu: { ...MenuTheme(defaultTheme) },
    MuiMenuItem: { ...MenuItemTheme(defaultTheme) },
    MuiMenuList: { ...MenuListTheme(defaultTheme) },
    MuiModal: { ...ModalTheme(defaultTheme) },
    MuiOutlinedInput: { ...OutlinedInputTheme(defaultTheme) },
    MuiRadio: { ...RadioTheme(defaultTheme) },
    MuiRadioGroup: { ...RadioGroupTheme(defaultTheme) },
    MuiSelect: { ...SelectTheme(defaultTheme) },
    MuiSwitch: { ...SwitchTheme(defaultTheme) },
    MuiTextField: { ...TextFieldTheme(defaultTheme) },
    MuiTable: { ...TableTheme(defaultTheme) },
    MuiTableBody: { ...TableBodyTheme(defaultTheme) },
    MuiTableCell: { ...TableCellTheme(defaultTheme) },
    MuiTableContainer: { ...TableContainerTheme(defaultTheme) },
    MuiTableFooter: { ...TableFooterTheme(defaultTheme) },
    MuiTableHead: { ...TableHeadTheme(defaultTheme) },
    MuiTablePagination: { ...TablePaginationTheme(defaultTheme) },
    MuiTableRow: { ...TableRowTheme(defaultTheme) },
    MuiTableSortLabel: { ...TableSortLabelTheme(defaultTheme) },
    MuiToolbar: { ...ToolbarTheme(defaultTheme) },
    MuiCssBaseline: {
      styleOverrides: () => ({}),
    },
  },
};

// Create a theme instance.
export const theme = createTheme(overrideTheme);

// process.env.NODE_ENV !== `production` &&
//   console.log(theme, '===================theme');
