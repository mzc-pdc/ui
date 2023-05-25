import React, {FC} from "react";
import {MenuListProps} from "@mui/material";
import {StyledMenuList} from "./styled";

export const MenuList: FC<MenuListProps> = (props, {
    ...restProps
}) => {
    return (
        <StyledMenuList
            {...props}
            {...restProps}
        />
    )
}