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
exports.__esModule = true;
exports.WizzAirRequestsManager = void 0;
var axios_1 = require("axios");
var set_cookie_parser_1 = require("set-cookie-parser");
var axios_retry_1 = require("axios-retry");
var helpers_1 = require("./helpers");
var wait_1 = require("helpers/wait");
var defaultRequestHeaders = {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': 'https://wizzair.com',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Safari/605.1.15',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'en-gb',
    Accept: 'application/json, text/plain, */*',
    Host: 'be.wizzair.com',
    Origin: 'https://wizzair.com',
    Connection: 'keep-alive',
    Referer: 'https://wizzair.com/en-gb/flights/fare-finder'
};
var WizzAirRequestsManager = /** @class */ (function () {
    function WizzAirRequestsManager(maxRequestsPerSession) {
        var _this = this;
        this.maxRequestsPerSession = maxRequestsPerSession;
        this.axiosClient = axios_1["default"].create({ withCredentials: true, timeout: 60000 });
        this.cookies = {};
        this.requestsCount = 0;
        this.requestInterceptor = function (config) {
            return __assign(__assign({}, config), { headers: _this.headers });
        };
        this.responseInterceptor = function (response) {
            var _a;
            var cookieStore = set_cookie_parser_1["default"].parse((_a = response === null || response === void 0 ? void 0 : response.headers) === null || _a === void 0 ? void 0 : _a['set-cookie']);
            cookieStore.forEach(function (cookie) {
                _this.cookies[cookie.name] = cookie.value;
            });
            return response;
        };
        this.getCookieString = function () {
            return Object.entries(_this.cookies).map(function (_a) {
                var key = _a[0], value = _a[1];
                return "".concat(key, "=").concat(value);
            }).join('; ');
        };
        this.initializeAxiosClient = function () { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!!this.axiosClient.defaults.baseURL) return [3 /*break*/, 2];
                        _a = this.axiosClient.defaults;
                        return [4 /*yield*/, (0, helpers_1.getApiUrl)()];
                    case 1:
                        _a.baseURL = _b.sent();
                        (0, axios_retry_1["default"])(this.axiosClient, { retries: 3, retryDelay: axios_retry_1["default"].exponentialDelay });
                        _b.label = 2;
                    case 2:
                        this.axiosClient.interceptors.request.use(this.requestInterceptor);
                        this.axiosClient.interceptors.response.use(this.responseInterceptor);
                        return [2 /*return*/];
                }
            });
        }); };
        this.login = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.axiosClient.get('/userSession/new')];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        this.doRequestPreCheck = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.initializationComplete];
                    case 1:
                        _a.sent();
                        if (!(this.requestsCount % this.maxRequestsPerSession === 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.login()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        this.requestsCount++;
                        // Add minimal delay between requests to avoid being blocked
                        return [4 /*yield*/, (0, wait_1.wait)(1000)];
                    case 4:
                        // Add minimal delay between requests to avoid being blocked
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        this.get = function (url, config) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.doRequestPreCheck()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.axiosClient.get(url, config)];
                }
            });
        }); };
        this.post = function (url, data, config) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.doRequestPreCheck()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.axiosClient.post(url, data, config)];
                }
            });
        }); };
        this.initializationComplete = this.initializeAxiosClient();
    }
    Object.defineProperty(WizzAirRequestsManager.prototype, "headers", {
        get: function () {
            var _a;
            return __assign(__assign({ Cookie: this.getCookieString() }, defaultRequestHeaders), this.cookies.RequestVerificationToken
                ? { 'X-RequestVerificationToken': (_a = this.cookies) === null || _a === void 0 ? void 0 : _a.RequestVerificationToken }
                : {});
        },
        enumerable: false,
        configurable: true
    });
    return WizzAirRequestsManager;
}());
exports.WizzAirRequestsManager = WizzAirRequestsManager;
