import React, {FC} from "react";
import {MenuListProps} from "@mui/material";
import {StyledMenuList} from "./styled";

export const MenuList: FC<MenuListProps> = React.forwardRef((props, ref) => {
    return (
        <StyledMenuList
            {...props}
            ref={ref}
        />
    )
});

MenuList.displayName = "MenuList";