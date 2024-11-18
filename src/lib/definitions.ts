import { ReactNode } from "react";

export interface SimpleDropdownProps {
    children: ReactNode,
    buttonText?: string,
    icon?: ReactNode,
    closeOnClick?: boolean,
    autoClose?: boolean,
    type?: "btn-selector-secondary" | "btn-selector" | "btn-secondary" | "btn-primary",
    disabled?: boolean
}
