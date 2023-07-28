"use strict";
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
exports.getFares = void 0;
var types_1 = require("@common/types");
var axios_1 = require("axios");
var axios_retry_1 = require("axios-retry");
var date_1 = require("helpers/date");
var wait_1 = require("helpers/wait");
var common_1 = require("helpers/common");
var exchange_1 = require("helpers/exchange");
(0, axios_retry_1["default"])(axios_1["default"], { retries: 3, retryDelay: axios_retry_1["default"].exponentialDelay });
function getFares(params) {
    var _a, _b, _c, _d;
    return __awaiter(this, void 0, void 0, function () {
        var endDate, url, res, data, fares, targetCurrency, _i, _e, f, _f, _g, _h;
        var _j;
        return __generator(this, function (_k) {
            switch (_k.label) {
                case 0: return [4 /*yield*/, (0, wait_1.wait)(500)];
                case 1:
                    _k.sent();
                    endDate = (0, date_1.formatDate)((0, date_1.addDaysToDate)(new Date(params.startDate), params.lookupDays));
                    url = "https://www.ryanair.com/api/farfnd/3/oneWayFares/".concat(params.origin, "/").concat(params.destination, "/cheapestPerDay?outboundDateFrom=").concat(params.startDate, "&outboundDateTo=").concat(endDate);
                    return [4 /*yield*/, axios_1["default"].request({ url: url, method: 'GET' })];
                case 2:
                    res = _k.sent();
                    data = res.data;
                    fares = [];
                    targetCurrency = process.env.TARGET_CURRENCY || 'EUR';
                    _i = 0, _e = (_a = data.outbound) === null || _a === void 0 ? void 0 : _a.fares.filter(function (fare) { return !fare.unavailable && !fare.soldOut; });
                    _k.label = 3;
                case 3:
                    if (!(_i < _e.length)) return [3 /*break*/, 8];
                    f = _e[_i];
                    _g = (_f = fares).push;
                    _j = {
                        id: "".concat(params.origin, "-").concat(params.destination, "-").concat(types_1.Operator.RYANAIR, "-").concat(f.departureDate),
                        origin: params.origin,
                        destination: params.destination,
                        operator: types_1.Operator.RYANAIR,
                        date: new Date(f.departureDate),
                        currency: targetCurrency
                    };
                    if (!(((_b = f.price) === null || _b === void 0 ? void 0 : _b.currencyCode.toUpperCase()) === targetCurrency)) return [3 /*break*/, 4];
                    _h = f.price.value;
                    return [3 /*break*/, 6];
                case 4: return [4 /*yield*/, exchange_1["default"].convert({
                        source: ((_c = f.price) === null || _c === void 0 ? void 0 : _c.currencyCode) || '',
                        target: targetCurrency,
                        amount: ((_d = f.price) === null || _d === void 0 ? void 0 : _d.value) || 0
                    })];
                case 5:
                    _h = _k.sent();
                    _k.label = 6;
                case 6:
                    _g.apply(_f, [(_j.price = _h,
                            _j)]);
                    _k.label = 7;
                case 7:
                    _i++;
                    return [3 /*break*/, 3];
                case 8: return [2 /*return*/, (0, common_1.getUniqueFares)(fares).filter(function (fare) { return fare.price; })];
            }
        });
    });
}
exports.getFares = getFares;
