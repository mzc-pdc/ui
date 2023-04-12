import { styled } from '@mui/material/styles';
import { theme } from '../../themes';
import { IWorkspaceIconProps } from './types';

export const Icon = styled(`img`)({
  display: `flex`,
  width: 16,
  height: 16,
});

export const WorkspaceIcon = styled(`span`)((props: IWorkspaceIconProps) => ({
  position: `relative`,
  display: `inline-block`,
  width: 24,
  minWidth: 24,
  height: 24,
  marginRight: 12,
  ...(props?.icon
    ? {
        backgroundImage: `url(${props?.icon})`,
        backgroundSize: `cover`,
      }
    : {
        '&:before': {
          content: `'${props?.name?.split('')[0]}'`,
          position: `absolute`,
          top: 1,
          display: 'inline-flex',
          width: 24,
          height: 24,
          justifyContent: 'center',
          alignItems: `flex-start`,
          lineHeight: `21px`,
          borderRadius: 4,
          fontWeight: 700,
          fontSize: 12,
          color: theme.palette.common.white,
          boxSizing: `border-box`,
          backgroundColor: props?.bg || theme.palette.logo.grayscale,
        },
      }),
}));
