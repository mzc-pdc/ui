import React, {FC, useCallback, useState} from 'react';
import { TooltipProps } from './types';

import { StyledTooltip } from './styled';
import { theme } from '../../themes';

export const Tooltip: FC<TooltipProps> = React.forwardRef((props, ref) => {
  const [open, setOpen] = useState(false);
  const handleOpenTooltip = useCallback(() => setOpen(true), []);
  const handleCloseTooltip = useCallback(() => setOpen(false), []);

  return (
    <StyledTooltip
      open={open}
      onOpen={handleOpenTooltip}
      onClose={handleCloseTooltip}
      color={props.color}
      componentsProps={{
        tooltip: {
          sx: {
            bgcolor: props.color
              ? theme.palette[props.color].light
              : theme.palette.secondary[600],
            '& .MuiTooltip-arrow': {
              color: props.color
                ? theme.palette[props.color].light
                : theme.palette.secondary[600],
            },
          },
        },
      }}
      {...props}
      ref={ref}
    >
      {props.children}
    </StyledTooltip>
  );
});

Tooltip.displayName = "Tooltip";