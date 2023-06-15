import React, {FC} from "react";
import {ListItemProps} from "@mui/material";
import {StyledListItem} from "./styled";

export const ListItem: FC<ListItemProps> =  React.forwardRef((props, ref) => {
    return <StyledListItem
            {...props}
            ref={ref}
        />
});

ListItem.displayName = "ListItem";