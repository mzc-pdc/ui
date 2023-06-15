import React, {FC} from "react";
import {ListItemIconProps} from "@mui/material";
import {StyledListItemIcon} from "./styled";

export const ListItemIcon: FC<ListItemIconProps> = React.forwardRef((props, ref) => {
    return (
        <StyledListItemIcon
            {...props}
            ref={ref}
        />
    )
});

ListItemIcon.displayName = "ListItemIcon";