import React, { ElementType, MouseEventHandler, ReactNode } from "react";
export declare type ButtonType = 'default' | 'danger' | 'ghost' | 'secondary';
export declare type ComponentSize = 'default' | 'large' | 'small';
interface BaseButtonProps {
    type?: ButtonType;
    icon?: ElementType;
    size?: ComponentSize;
    children?: ReactNode;
    disable?: boolean;
    loading?: boolean;
    className?: string;
}
declare type HTMLButtonProps = {
    onClick?: MouseEventHandler<HTMLButtonElement>;
} & BaseButtonProps;
declare type HTMLAnchorProps = {
    href?: string;
} & BaseButtonProps;
declare type CustomNodeProps = {
    as?: ElementType;
    to?: string;
} & BaseButtonProps;
export declare type ButtonProps = HTMLAnchorProps & HTMLButtonProps & CustomNodeProps;
declare const _default: React.ForwardRefExoticComponent<{
    href?: string | undefined;
} & BaseButtonProps & {
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
} & {
    as?: React.ElementType<any> | undefined;
    to?: string | undefined;
} & React.RefAttributes<unknown>>;
export default _default;
//# sourceMappingURL=button.d.ts.map