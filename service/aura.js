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
var neo4j_driver_1 = require("neo4j-driver");
var prisma_1 = require("./helpers/prisma");
var driver = neo4j_driver_1["default"].driver('neo4j+s://c3e206d8.databases.neo4j.io', neo4j_driver_1["default"].auth.basic('neo4j', 'NN2mToVhefiC0HqQsturGnHKOwvhy-yMz-VytXPkXKw'));
function createAirports() {
    return __awaiter(this, void 0, void 0, function () {
        var session, airports, formattedAirports, query, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    session = driver.session();
                    return [4 /*yield*/, prisma_1.prisma.airport.findMany()];
                case 1:
                    airports = _a.sent();
                    formattedAirports = airports.map(function (airport) { return (__assign(__assign({}, airport), { connections: airport.connections.map(function (_a) {
                            var code = _a.code, operator = _a.operator;
                            return "".concat(code, ".").concat(operator);
                        }) })); });
                    query = "\n  UNWIND $airports AS airport\n  CREATE (a:Airport {id: airport.id, code: airport.code, name: airport.name, countryName: airport.countryName, countryCode: airport.countryCode, latitude: airport.latitude, longitude: airport.longitude, connections: airport.connections })\n  RETURN a\n";
                    return [4 /*yield*/, session.run(query, { airports: formattedAirports })];
                case 2:
                    result = _a.sent();
                    // Handle the result
                    result.records.forEach(function (record) {
                        var createdAirport = record.get('a').properties;
                        console.log(createdAirport);
                    });
                    // Don't forget to close the session
                    return [4 /*yield*/, session.close()];
                case 3:
                    // Don't forget to close the session
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function deleteAirports() {
    return __awaiter(this, void 0, void 0, function () {
        var session, query, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    session = driver.session();
                    query = "\n    MATCH (a:Airport)\n    DETACH DELETE a\n  ";
                    return [4 /*yield*/, session.run(query)];
                case 1:
                    result = _a.sent();
                    console.log('All airports have been deleted.');
                    // Don't forget to close the session
                    return [4 /*yield*/, session.close()];
                case 2:
                    // Don't forget to close the session
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function listAirports() {
    return __awaiter(this, void 0, void 0, function () {
        var session, query, result, airports;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    session = driver.session();
                    query = "\n    MATCH (a:Airport)\n    RETURN a\n  ";
                    return [4 /*yield*/, session.run(query)];
                case 1:
                    result = _a.sent();
                    airports = result.records.map(function (record) { return record.get('a').properties; });
                    console.log('List of airports:', airports);
                    // Don't forget to close the session
                    return [4 /*yield*/, session.close()];
                case 2:
                    // Don't forget to close the session
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function createFares() {
    return __awaiter(this, void 0, void 0, function () {
        var session, batchSize, faresCount, currentBatchIndex, fares, formatted, tx, query, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    session = driver.session();
                    batchSize = 1000;
                    return [4 /*yield*/, prisma_1.prisma.fare.count()];
                case 1:
                    faresCount = _a.sent();
                    currentBatchIndex = 0;
                    _a.label = 2;
                case 2:
                    if (!(currentBatchIndex * batchSize < faresCount)) return [3 /*break*/, 6];
                    return [4 /*yield*/, prisma_1.prisma.fare.findMany({
                            skip: currentBatchIndex * batchSize,
                            take: batchSize
                        })];
                case 3:
                    fares = _a.sent();
                    formatted = fares.map(function (fare) { return (__assign(__assign({}, fare), { date: fare.date.toISOString() })); });
                    tx = session.beginTransaction();
                    query = "\n      UNWIND $fares AS fare\n      MATCH (origin:Airport {code: fare.origin})\n      MATCH (destination:Airport {code: fare.destination})\n      MERGE (origin)-[f:FARE {date: datetime(fare.date), price: fare.price, currency: fare.currency, operator: fare.operator}]->(destination)\n      RETURN f\n    ";
                    return [4 /*yield*/, tx.run(query, { fares: formatted })];
                case 4:
                    result = _a.sent();
                    return [4 /*yield*/, tx.commit()];
                case 5:
                    _a.sent(); // Commit the transaction
                    // Handle the result
                    result.records.forEach(function (record) {
                        var createdFare = record.get('f').properties;
                        console.log(createdFare);
                    });
                    currentBatchIndex++;
                    console.log("Created ".concat(currentBatchIndex * batchSize, " fares."));
                    return [3 /*break*/, 2];
                case 6: 
                // Don't forget to close the session
                return [4 /*yield*/, session.close()];
                case 7:
                    // Don't forget to close the session
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function getReturnFares(origin, destination, minDuration, maxDuration) {
    return __awaiter(this, void 0, void 0, function () {
        var session, query, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    session = driver.session();
                    query = "\nMATCH (start:Airport {code: $origin})\nMATCH (end:Airport {code: $destination})\nMATCH outboundPath=allShortestPaths((start)-[:FARE*..2]-(end))\nWITH start, end, outboundPath, [r in relationships(outboundPath) | r.properties] AS outbound\nMATCH inboundPath=allShortestPaths((end)-[:FARE*..2]-(start))\nWITH outbound, outboundPath, inboundPath, [r in relationships(inboundPath) | r.properties] AS inbound\nWHERE inbound[0].date > outbound[-1].date + duration({days: $minDuration})\nAND inbound[0].date < outbound[-1].date + duration({days: $maxDuration})\nRETURN outbound AS outboundFares, inbound AS inboundFares, reduce(totalPrice = 0, fare in relationships(outboundPath) + relationships(inboundPath) | totalPrice + fare.properties.price) AS totalPrice\nORDER BY totalPrice ASC\nLIMIT 10\n\n  ";
                    console.time('query');
                    return [4 /*yield*/, session.run(query, { origin: origin, destination: destination, minDuration: minDuration, maxDuration: maxDuration })];
                case 1:
                    result = _a.sent();
                    console.timeEnd('query');
                    return [4 /*yield*/, session.close()];
                case 2:
                    _a.sent();
                    return [2 /*return*/, result.records.map(function (record) { return ({
                            outboundFares: record.get('outboundFares'),
                            inboundFares: record.get('inboundFares'),
                            totalPrice: record.get('totalPrice')
                        }); })];
            }
        });
    });
}
function getOneWayFares(origin, destination) {
    return __awaiter(this, void 0, void 0, function () {
        var session, query, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    session = driver.session();
                    query = "\n    MATCH (origin:Airport {code: $origin})-[fare:FARE]->(destination:Airport {code: $destination})\n    RETURN fare\n    ORDER BY fare.price ASC\n    LIMIT 10\n  ";
                    return [4 /*yield*/, session.run(query, { origin: origin, destination: destination })];
                case 1:
                    result = _a.sent();
                    session.close();
                    return [2 /*return*/, result.records.map(function (record) {
                            var fare = record.get('fare');
                            return {
                                id: fare.identity.toString(),
                                price: fare.properties.price,
                                date: fare.properties.date,
                                currency: fare.properties.currency,
                                operator: fare.properties.operator
                            };
                        })];
            }
        });
    });
}
// getReturnFares('INI', 'CFU', 2, 9).then((fares) => {
// console.log(
//   fares[0].outboundFares[0].date,
//   fares[0].inboundFares[0].date
// );
// console.log(fares[0].outboundFares[0]);
// });
// getOneWayFares('CFU', 'INI').then((fares) => {
//   console.log(fares);
// });
function deleteAllFares() {
    return __awaiter(this, void 0, void 0, function () {
        var session, query, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    session = driver.session();
                    query = "\n    CALL apoc.periodic.iterate(\n    \"MATCH ()-[f:FARE]-() RETURN f\",\n    \"DETACH DELETE f\",\n    {batchSize:10000}\n)\n  ";
                    return [4 /*yield*/, session.run(query)];
                case 1:
                    result = _a.sent();
                    console.log('All fares have been deleted.');
                    // Don't forget to close the session
                    return [4 /*yield*/, session.close()];
                case 2:
                    // Don't forget to close the session
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
deleteAllFares();
