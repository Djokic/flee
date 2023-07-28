"use strict";
exports.__esModule = true;
exports.formatQueryParams = void 0;
function formatQueryParams(params) {
    var paramsArray = [];
    Object.entries(params).forEach(function (_a) {
        var key = _a[0], value = _a[1];
        if (Array.isArray(value)) {
            value.forEach(function (item) { return paramsArray.push([key, item]); });
        }
        else {
            paramsArray.push([key, value]);
        }
    });
    return paramsArray.map(function (_a) {
        var key = _a[0], value = _a[1];
        return "".concat(key, "=").concat(value);
    }).join('&');
}
exports.formatQueryParams = formatQueryParams;
