"use strict";
exports.__esModule = true;
exports.transformQueryToQueryString = void 0;
var NOT_VALID_MESSAGE = 'Not valid query';
function transformQueryToQueryString(query) {
    var _a;
    var parts = query.trim().split('\n');
    var queryStringParts = [];
    if (((_a = parts.pop()) === null || _a === void 0 ? void 0 : _a.trim()) !== '}') {
        throw new Error(NOT_VALID_MESSAGE);
    }
    var rootElement = parts.shift();
    if ((rootElement === null || rootElement === void 0 ? void 0 : rootElement.indexOf('{')) === -1) {
        throw new Error(NOT_VALID_MESSAGE);
    }
    var rootName = rootElement === null || rootElement === void 0 ? void 0 : rootElement.replace('{', '').trim();
    var propsStack = [];
    parts.forEach(function (part) {
        if (part.indexOf('{') > -1) {
            propsStack.push(part.replace('{', '').trim());
        }
        if (part.indexOf('}') > -1) {
            propsStack.pop();
        }
        if (part.indexOf('{') === -1 && part.indexOf('}') === -1) {
            var pathValue = propsStack.join('.');
            pathValue += pathValue ? '.' : '';
            queryStringParts.push("".concat(rootName, "=").concat(pathValue).concat(part.trim()));
        }
    });
    return queryStringParts === null || queryStringParts === void 0 ? void 0 : queryStringParts.join('&');
}
exports.transformQueryToQueryString = transformQueryToQueryString;
