
import { TypographyProps as MuiTypographyProps } from '@mui/material/Typography';
import {ReactNode} from "react";

export interface TypographyProps extends MuiTypographyProps {
    component?: ReactNode;
}
