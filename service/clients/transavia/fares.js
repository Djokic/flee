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
exports.getFares = void 0;
var wait_1 = require("helpers/wait");
var date_1 = require("@common/date");
var exchange_1 = require("helpers/exchange");
var types_1 = require("clients/types");
function getFares(axios, params) {
    return __awaiter(this, void 0, void 0, function () {
        var maxDays, batchesCount, fares, i, date, res, data, targetCurrency, joinFlights, _i, joinFlights_1, flight, _a, _b, _c;
        var _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    console.log("[WizzAir] Getting Flights -> ".concat(params.origin, " <--> ").concat(params.destination));
                    maxDays = 21;
                    batchesCount = Math.ceil(params.lookupDays / maxDays);
                    fares = [];
                    i = 0;
                    _e.label = 1;
                case 1:
                    if (!(i < batchesCount)) return [3 /*break*/, 10];
                    date = (0, date_1.formatDate)((0, date_1.addDaysToDate)(new Date(params.startDate), (i * maxDays) + 11));
                    return [4 /*yield*/, (0, wait_1.wait)(1000)];
                case 2:
                    _e.sent();
                    return [4 /*yield*/, axios.request({
                            url: '/asset/farechart',
                            method: 'POST',
                            data: {
                                adultCount: 1,
                                childCount: 0,
                                infantCount: 0,
                                dayInterval: 10,
                                wdc: true,
                                isRescueFare: false,
                                isFlightChange: false,
                                flightList: [
                                    {
                                        departureStation: params.origin,
                                        arrivalStation: params.destination,
                                        date: date
                                    },
                                    {
                                        departureStation: params.destination,
                                        arrivalStation: params.origin,
                                        date: date
                                    }
                                ]
                            }
                        })];
                case 3:
                    res = _e.sent();
                    data = res.data;
                    targetCurrency = process.env.TARGET_CURRENCY || 'EUR';
                    joinFlights = __spreadArray(__spreadArray([], data === null || data === void 0 ? void 0 : data.outboundFlights, true), data === null || data === void 0 ? void 0 : data.returnFlights, true).filter(function (flight) { return flight.price.amount > 0; });
                    _i = 0, joinFlights_1 = joinFlights;
                    _e.label = 4;
                case 4:
                    if (!(_i < joinFlights_1.length)) return [3 /*break*/, 9];
                    flight = joinFlights_1[_i];
                    if (!(flight.priceType === 'price' && flight.date)) return [3 /*break*/, 8];
                    _b = (_a = fares).push;
                    _d = {
                        origin: flight.departureStation,
                        destination: flight.arrivalStation,
                        date: (0, date_1.formatDate)(new Date(flight.date)),
                        operator: types_1.Operator.WIZZAIR,
                        currency: targetCurrency
                    };
                    if (!(flight.price.currencyCode.toUpperCase() === targetCurrency)) return [3 /*break*/, 5];
                    _c = flight.price.amount;
                    return [3 /*break*/, 7];
                case 5: return [4 /*yield*/, exchange_1["default"].convert({
                        source: flight.price.currencyCode,
                        target: targetCurrency,
                        amount: flight.price.amount
                    })];
                case 6:
                    _c = _e.sent();
                    _e.label = 7;
                case 7:
                    _b.apply(_a, [(_d.price = _c,
                            _d)]);
                    _e.label = 8;
                case 8:
                    _i++;
                    return [3 /*break*/, 4];
                case 9:
                    i++;
                    return [3 /*break*/, 1];
                case 10: return [2 /*return*/, fares];
            }
        });
    });
}
exports.getFares = getFares;
