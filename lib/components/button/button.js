var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { StyledButton } from "./styled";
var Button = function (props, ref) {
    var _a = props.type, type = _a === void 0 ? 'default' : _a, icon = props.icon, _b = props.size, size = _b === void 0 ? 'default' : _b, _c = props.className, className = _c === void 0 ? '' : _c, children = props.children, _d = props.disable, disable = _d === void 0 ? false : _d, _e = props.loading, loading = _e === void 0 ? false : _e, onClick = props.onClick, href = props.href, as = props.as, to = props.to;
    var styles = {
        innerType: type,
        size: size,
        disable: disable,
        withText: children !== null,
    };
    var typeSelector = function (ButtonType) {
        switch (ButtonType) {
            case 'default':
                return 'blue';
                break;
            case 'danger':
                return 'red';
                break;
            case 'ghost':
                return 'grey';
                break;
            case 'secondary':
                return 'green';
                break;
            default:
                return 'blue';
                break;
        }
    };
    var sizeSelector = function (ButtonSize) {
        switch (ButtonSize) {
            case 'default':
                return '15px';
                break;
            case 'small':
                return '10px';
                break;
            case 'large':
                return '25px';
            default:
                return '15px';
                break;
        }
    };
    if (as) {
        return (_jsx(StyledButton, __assign({ style: {
                "--backgroundColor": typeSelector(type),
                padding: sizeSelector(size),
            }, as: as, to: to, ref: ref, className: className }, styles, { children: loading ? 'Loading...' : children })));
    }
    if (href) {
        return (_jsx(StyledButton, __assign({ style: {
                "--backgroundColor": typeSelector(type),
                padding: sizeSelector(size),
            }, as: 'a', href: href, className: className }, styles, { children: loading ? 'Loading...' : children })));
    }
    return (_jsx(StyledButton, __assign({ style: {
            "--backgroundColor": typeSelector(type),
            padding: sizeSelector(size),
        }, as: 'button', type: 'button', onClick: onClick, ref: ref, className: className }, styles, { children: loading ? 'Loading...' : children })));
};
export default React.forwardRef(Button);
//# sourceMappingURL=button.js.map