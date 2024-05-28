"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dayjs = require("dayjs");
require("dayjs/locale/pt-br");
const utc_1 = require("dayjs/plugin/utc");
dayjs.locale('pt-br');
dayjs.extend(utc_1.default);
class DateUtils {
    static getCurrentDate() {
        return dayjs.utc().utc();
    }
    static calculateAge(birthDate) {
        const today = DateUtils.getCurrentDate();
        const birth = dayjs.utc(birthDate);
        return today.diff(birth, 'year');
    }
    static formatDate(date, format) {
        return dayjs.utc(date).format(format);
    }
    static isBefore(date, comparedDate) {
        return dayjs.utc(date).isBefore(dayjs.utc(comparedDate));
    }
    static isAfter(date, comparedDate) {
        return dayjs.utc(date).isAfter(dayjs.utc(comparedDate));
    }
    static isAdult(birthDate) {
        const today = DateUtils.getCurrentDate();
        const age = today.diff(dayjs.utc(birthDate), 'year');
        return age >= 18;
    }
}
exports.default = DateUtils;
//# sourceMappingURL=date.js.map