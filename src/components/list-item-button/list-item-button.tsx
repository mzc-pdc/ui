import React, {FC} from "react";
import {ListItemButtonProps} from "@mui/material";
import {StyledListItemButton} from "./styled";

export const ListItemButton: FC<ListItemButtonProps> = React.forwardRef((props, ref) => {
    return (
        <StyledListItemButton
            {...props}
            ref={ref}
        />
    )
});

ListItemButton.displayName = "ListItemButton";