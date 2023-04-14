import React, {FC} from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { Build } from '@mui/icons-material';
import { IMenuPoPsManagementProps } from './types';

export const MenuPoPsManagement: FC<IMenuPoPsManagementProps> = ({
  iconSize = 20,
  title,
}) => {
  return (
    <Tooltip title={title}>
      <IconButton>
        <Build sx={{ width: iconSize, height: iconSize }} />
      </IconButton>
    </Tooltip>
  );
};
