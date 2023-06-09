import {Button as MuiButton} from '@mui/material';
import { styled } from '@mui/material/styles';
import { ButtonProps } from './types';
import {CircularProgress} from '../circular-progress';

export const Children = styled('span')``;

export const Spinner = styled(CircularProgress)(() => ({
  position: `absolute`,
}));

export const StyledButton = styled(MuiButton, {
  shouldForwardProp: prop => !['loading', 'rounded'].includes(String(prop)),
})<ButtonProps>(({theme, loading, rounded }) => ({
  ...(loading && {
    'span:not(.MuiCircularProgress-root)': {
      opacity:0,
    }
  }),
  ...(rounded && {
    borderRadius: theme.spacing(3.5),
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
  })
}));


// export const StyledButton = styled(MuiButton, {
//   shouldForwardProp: prop => !['variant', 'color'].includes(String(prop)),
// })<ButtonProps>(({ theme,variant, color }) => ({
//   ...(variant === "round" && {
//     borderRadius: `28px`,
//     paddingLeft:  theme.spacing(10),
//     paddingRight: theme.spacing(10),
//     ...(color && color !== 'inherit' && {
//       color: theme.palette[color].contrastText,
//       borderColor: theme.palette[color].main,
//       backgroundColor: theme.palette[color].main,
//       boxShadow: `none`,
//       "&:hover": {
//         backgroundColor: theme.palette[color].main,
//         boxShadow: `0 3px 6px 0 rgba(0, 0, 0, 0.32)`,
//         ".MuiTouchRipple-root": {
//           backgroundColor: alpha(theme.palette.common.white, 0.08)
//         }
//       },
//       "&:focus": {
//         backgroundColor: theme.palette[color].main,
//         ".MuiTouchRipple-root": {
//           backgroundColor: alpha(theme.palette.common.white, 0.12)
//         }
//       },
//       "&:active": {
//         backgroundColor: theme.palette[color].main,
//         boxShadow: `0 3px 6px 0 rgba(0, 0, 0, 0.32)`,
//         ".MuiTouchRipple-root": {
//           backgroundColor: alpha(theme.palette.common.white, 0.16)
//         }
//       },
//       "&.Mui-disabled": {
//         background: alpha(theme.palette.secondary.main, 0.16),
//         color: alpha(theme.palette.secondary.main, 0.48)
//       }
//     })
//   })
// }));
