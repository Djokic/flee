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
var common_1 = require("helpers/common");
var date_1 = require("helpers/date");
var exchange_1 = require("helpers/exchange");
function getFares(fetcher, params) {
    return __awaiter(this, void 0, void 0, function () {
        var maxDays, batchesCount, fares, i, from, to, data, targetCurrency, flights, _i, flights_1, flight, _a, _b, departureDate, _c, _d, _e;
        var _f;
        return __generator(this, function (_g) {
            switch (_g.label) {
                case 0:
                    maxDays = 30;
                    batchesCount = Math.ceil(params.lookupDays / maxDays);
                    fares = [];
                    i = 0;
                    _g.label = 1;
                case 1:
                    if (!(i < batchesCount)) return [3 /*break*/, 11];
                    from = (0, date_1.formatDate)((0, date_1.addDaysToDate)(new Date(params.startDate), (i * maxDays)));
                    to = (0, date_1.formatDate)((0, date_1.addDaysToDate)(new Date(params.startDate), ((i + 1) * maxDays)));
                    return [4 /*yield*/, fetcher('/search/timetable', {
                            flightList: [
                                {
                                    departureStation: params.origin,
                                    arrivalStation: params.destination,
                                    from: from,
                                    to: to
                                },
                                {
                                    departureStation: params.destination,
                                    arrivalStation: params.origin,
                                    from: from,
                                    to: to
                                }
                            ],
                            priceType: 'wdc',
                            adultCount: 1,
                            childCount: 0,
                            infantCount: 0
                        })];
                case 2:
                    data = (_g.sent()).data;
                    targetCurrency = process.env.TARGET_CURRENCY || 'EUR';
                    flights = data === null || data === void 0 ? void 0 : data.outboundFlights.filter(function (flight) { return flight.price.amount > 0; });
                    _i = 0, flights_1 = flights;
                    _g.label = 3;
                case 3:
                    if (!(_i < flights_1.length)) return [3 /*break*/, 10];
                    flight = flights_1[_i];
                    if (!(flight.priceType === 'price' && flight.departureDate)) return [3 /*break*/, 9];
                    _a = 0, _b = flight.departureDates;
                    _g.label = 4;
                case 4:
                    if (!(_a < _b.length)) return [3 /*break*/, 9];
                    departureDate = _b[_a];
                    _d = (_c = fares).push;
                    _f = {
                        id: "".concat(flight.departureStation, "-").concat(flight.arrivalStation, "-").concat(types_1.Operator.WIZZAIR, "-").concat(departureDate),
                        origin: flight.departureStation,
                        destination: flight.arrivalStation,
                        date: new Date(departureDate),
                        operator: types_1.Operator.WIZZAIR,
                        currency: targetCurrency
                    };
                    if (!(flight.price.currencyCode.toUpperCase() === targetCurrency)) return [3 /*break*/, 5];
                    _e = flight.price.amount;
                    return [3 /*break*/, 7];
                case 5: return [4 /*yield*/, exchange_1["default"].convert({
                        source: flight.price.currencyCode,
                        target: targetCurrency,
                        amount: flight.price.amount
                    })];
                case 6:
                    _e = _g.sent();
                    _g.label = 7;
                case 7:
                    _d.apply(_c, [(_f.price = _e,
                            _f)]);
                    _g.label = 8;
                case 8:
                    _a++;
                    return [3 /*break*/, 4];
                case 9:
                    _i++;
                    return [3 /*break*/, 3];
                case 10:
                    i++;
                    return [3 /*break*/, 1];
                case 11: return [2 /*return*/, (0, common_1.getUniqueFares)(fares).filter(function (fare) { return fare.price; })];
            }
        });
    });
}
exports.getFares = getFares;
