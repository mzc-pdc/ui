import React, {FC} from "react";
import {ListItemAvatarProps} from "@mui/material";
import {StyledListItemAvatar} from "./styled";

export const ListItemAvatar: FC<ListItemAvatarProps> = props => {
    return (
        <StyledListItemAvatar
            {...props}
        />
    )
}