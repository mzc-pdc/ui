import React, {FC} from 'react';
import {TooltipProps} from './types';

import {StyledTooltip} from './styled';
import {theme} from "../../themes";

export const Tooltip: FC<TooltipProps> = (props, {
    ...restProps
}) => {
    return (
        <StyledTooltip
            {...props}
            {...restProps}
            color={props.color}
            componentsProps={{
                tooltip: {
                    sx: {
                        bgcolor: props.color ? theme.palette[props.color].light : theme.palette.secondary[600],
                        '& .MuiTooltip-arrow': {
                            color: props.color ? theme.palette[props.color].light : theme.palette.secondary[600],
                        },
                    },
                },
            }}
        >
            {props.children}
        </StyledTooltip>
    );
};
