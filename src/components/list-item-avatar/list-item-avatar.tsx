import React, {FC} from "react";
import {ListItemAvatarProps} from "@mui/material";
import {StyledListItemAvatar} from "./styled";

export const ListItemAvatar: FC<ListItemAvatarProps> = React.forwardRef((props, ref) => {
    return (
        <StyledListItemAvatar
            {...props}
            ref={ref}
        />
    )
});

ListItemAvatar.displayName = "ListItemAvatar";