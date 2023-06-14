import React, {FC} from "react";
import {ListItemButtonProps} from "@mui/material";
import {StyledListItemButton} from "./styled";

export const ListItemButton: FC<ListItemButtonProps> = props => {
    return (
        <StyledListItemButton
            {...props}
        />
    )
}