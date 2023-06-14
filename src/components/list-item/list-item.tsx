import React, {FC} from "react";
import {ListItemProps} from "@mui/material";
import {StyledListItem} from "./styled";

// eslint-disable-next-line react/display-name
export const ListItem: FC<ListItemProps> =  React.forwardRef((props, ref) => {
    return <StyledListItem
            {...props}
            ref={ref}
        />
});