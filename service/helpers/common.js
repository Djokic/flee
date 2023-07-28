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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.parseConnection = exports.getUniqueFares = exports.mergeAirports = exports.getConnectionsForOperator = void 0;
var getConnectionsForOperator = function (airport, operator) {
    return airport.connections.filter(function (connection) { return operator === connection.split('.')[1]; });
};
exports.getConnectionsForOperator = getConnectionsForOperator;
var mergeAirports = function (airportsArrays) {
    var airportsMap = {};
    airportsArrays.reduce(function (acc, curr) { return __spreadArray(__spreadArray([], acc, true), curr, true); }, []).forEach(function (airport) {
        if (!airportsMap[airport.code]) {
            airportsMap[airport.code] = airport;
        }
        else {
            airportsMap[airport.code] = __assign(__assign({}, airportsMap[airport.code]), { connections: __spreadArray(__spreadArray([], airportsMap[airport.code].connections, true), airport.connections, true) });
        }
    });
    return Object.values(airportsMap);
};
exports.mergeAirports = mergeAirports;
var getUniqueFares = function (fares) {
    var faresMap = {};
    fares.forEach(function (fare) {
        if (!faresMap[fare.origin + fare.destination + fare.date]) {
            faresMap[fare.origin + fare.destination + fare.date] = fare;
        }
    });
    return Object.values(faresMap);
};
exports.getUniqueFares = getUniqueFares;
function parseConnection(connectionString) {
    var _a = connectionString.split('.'), code = _a[0], operator = _a[1];
    return [code, operator];
}
exports.parseConnection = parseConnection;
