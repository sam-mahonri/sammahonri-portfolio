import { ReactNode } from "react";

export interface SimpleDropdownProps {
    children: ReactNode,
    buttonText?: string,
    icon?: ReactNode,
    closeOnClick?: boolean,
    autoClose?: boolean,
    type?: "only-icon" | "icon-primary" | "secondary" | "primary",
    disabled?: boolean
}
