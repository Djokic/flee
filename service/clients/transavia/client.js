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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
exports.TransaviaClient = void 0;
var axios_1 = require("axios");
var set_cookie_parser_1 = require("set-cookie-parser");
var common_1 = require("helpers/common");
var date_1 = require("@common/date");
var types_1 = require("clients/types");
var airports_1 = require("./airports");
var fares_1 = require("./fares");
var TransaviaClient = /** @class */ (function () {
    function TransaviaClient(params) {
        var _this = this;
        this.airportsData = [];
        this.faresCache = [];
        this.cookies = {};
        this.axiosClient = axios_1["default"].create({ withCredentials: true, timeout: 60000 });
        this.getAirports = function () { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, (0, airports_1.getAirportsWithRoutes)(this.axiosClient)];
                    case 1:
                        _a.airportsData = _b.sent();
                        return [2 /*return*/, this.airportsData];
                }
            });
        }); };
        this.getFaresForAirports = function (airports) { return __awaiter(_this, void 0, void 0, function () {
            var _i, airports_2, airport, connections, _a, connections_1, connection, fares;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _i = 0, airports_2 = airports;
                        _b.label = 1;
                    case 1:
                        if (!(_i < airports_2.length)) return [3 /*break*/, 6];
                        airport = airports_2[_i];
                        connections = (0, common_1.getConnectionsForOperator)(airport, types_1.Operator.WIZZAIR);
                        _a = 0, connections_1 = connections;
                        _b.label = 2;
                    case 2:
                        if (!(_a < connections_1.length)) return [3 /*break*/, 5];
                        connection = connections_1[_a];
                        return [4 /*yield*/, (0, fares_1.getFares)(this.axiosClient, {
                                origin: airport.code,
                                destination: connection.code,
                                startDate: (0, date_1.formatDate)(new Date()),
                                lookupDays: this.params.lookupDays
                            })];
                    case 3:
                        fares = _b.sent();
                        this.faresCache = __spreadArray(__spreadArray([], this.faresCache, true), fares, true);
                        _b.label = 4;
                    case 4:
                        _a++;
                        return [3 /*break*/, 2];
                    case 5:
                        _i++;
                        return [3 /*break*/, 1];
                    case 6: return [2 /*return*/, this.faresCache];
                }
            });
        }); };
        this.params = params;
        this.axiosClient.interceptors.request.use(function (config) { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                if ((_a = config === null || config === void 0 ? void 0 : config.url) === null || _a === void 0 ? void 0 : _a.includes('/Api/')) {
                    console.log(__assign(__assign({}, config.headers), this.headers));
                    return [2 /*return*/, __assign(__assign({}, config), { headers: __assign(__assign({}, config.headers), this.headers) })];
                }
                return [2 /*return*/, config];
            });
        }); });
        this.axiosClient.interceptors.response.use(function (response) {
            var _a;
            var cookieStore = set_cookie_parser_1["default"].parse((_a = response === null || response === void 0 ? void 0 : response.headers) === null || _a === void 0 ? void 0 : _a['set-cookie']);
            cookieStore.forEach(function (cookie) {
                _this.cookies[cookie.name] = cookie.value;
            });
            console.log(cookieStore);
            return response;
        });
        this.axiosClient.get('https://www.transavia.com/en-EU/book-a-flight/flights/search/');
    }
    Object.defineProperty(TransaviaClient.prototype, "headers", {
        get: function () {
            return {
                accept: '*/*',
                'accept-language': 'en-US,en;q=0.9',
                'request-id': '|287e5489c1c044e0b33a00662fbf474c.ce7b9023dc8a4158',
                'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"macOS"',
                'sec-fetch-dest': 'empty',
                'sec-fetch-mode': 'cors',
                'sec-fetch-site': 'same-origin',
                traceparent: '00-287e5489c1c044e0b33a00662fbf474c-ce7b9023dc8a4158-01',
                Cookie: Object.entries(this.cookies).map(function (_a) {
                    var key = _a[0], value = _a[1];
                    return "".concat(key, "=").concat(value);
                }).join('; ')
            };
        },
        enumerable: false,
        configurable: true
    });
    return TransaviaClient;
}());
exports.TransaviaClient = TransaviaClient;
