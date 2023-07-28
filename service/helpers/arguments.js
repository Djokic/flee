"use strict";
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
exports.__esModule = true;
exports.getArguments = void 0;
var prettifyArgName = function (name) {
    var parts = name
        .replace('--', '')
        .split('-');
    for (var i = 1; i < parts.length; i++) {
        parts[i] = parts[i].charAt(0).toUpperCase() + parts[i].slice(1);
    }
    return parts.join('');
};
var getArguments = function () {
    var args = process.argv.slice(2);
    return args.reduce(function (acc, curr) {
        var _a;
        var _b = curr.split('='), key = _b[0], value = _b[1];
        return __assign(__assign({}, acc), (_a = {}, _a[prettifyArgName(key)] = value !== undefined ? value : true, _a));
    }, {});
};
exports.getArguments = getArguments;
