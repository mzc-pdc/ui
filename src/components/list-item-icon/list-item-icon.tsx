import React, {FC} from "react";
import {ListItemIconProps} from "@mui/material";
import {StyledListItemIcon} from "./styled";

export const ListItemIcon: FC<ListItemIconProps> = props => {
    return (
        <StyledListItemIcon
            {...props}
        />
    )
}