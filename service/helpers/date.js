"use strict";
exports.__esModule = true;
exports.getDifferenceInDays = exports.addDaysToDate = exports.formatDate = void 0;
function formatDate(d) {
    var year = d.getUTCFullYear();
    var month = (d.getUTCMonth() + 1).toString().padStart(2, '0');
    var date = (d.getUTCDate()).toString().padStart(2, '0');
    return "".concat(year, "-").concat(month, "-").concat(date);
}
exports.formatDate = formatDate;
function addDaysToDate(date, daysToAdd) {
    date.setUTCDate(date.getUTCDate() + daysToAdd);
    return date;
}
exports.addDaysToDate = addDaysToDate;
function getDifferenceInDays(date1, date2) {
    var dayDurationInMs = 86400000;
    var d1 = new Date(date1);
    var d2 = new Date(date2);
    return Math.ceil((d1.getTime() - d2.getTime()) / dayDurationInMs);
}
exports.getDifferenceInDays = getDifferenceInDays;
