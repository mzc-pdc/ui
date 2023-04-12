import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { Build } from '@mui/icons-material';
import { IMenuManagementProps } from './types';

export const MenuManagement: React.FC<IMenuManagementProps> = ({
  iconSize = 20,
  title = ``,
}) => {
  return (
    <Tooltip title={title}>
      <IconButton>
        <Build sx={{ width: iconSize, height: iconSize }} />
      </IconButton>
    </Tooltip>
  );
};
