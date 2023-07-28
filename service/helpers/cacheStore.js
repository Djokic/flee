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
exports.CacheStore = void 0;
var CacheStore = /** @class */ (function () {
    function CacheStore() {
        var _this = this;
        this.values = {};
        this.getters = {};
        this.ttls = {};
        this.timestamps = {};
        this.setField = function (_a) {
            var key = _a.key, getter = _a.getter, ttl = _a.ttl;
            _this.getters[key] = getter;
            _this.ttls[key] = ttl || Infinity;
        };
        this.get = function (key, fieldParams) { return __awaiter(_this, void 0, void 0, function () {
            var existingValue, isFreshEnough, _a, _b;
            var _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        if (fieldParams) {
                            this.setField(fieldParams);
                        }
                        existingValue = this.values[key];
                        isFreshEnough = Date.now() - this.timestamps[key] < this.ttls[key];
                        if (existingValue && isFreshEnough) {
                            return [2 /*return*/, existingValue];
                        }
                        _a = this.values;
                        _b = key;
                        return [4 /*yield*/, ((_d = (_c = this.getters)[key]) === null || _d === void 0 ? void 0 : _d.call(_c))];
                    case 1:
                        _a[_b] = _e.sent();
                        this.timestamps[key] = Date.now();
                        return [2 /*return*/, this.values[key]];
                }
            });
        }); };
    }
    return CacheStore;
}());
exports.CacheStore = CacheStore;
var cacheStore = new CacheStore();
exports["default"] = cacheStore;
