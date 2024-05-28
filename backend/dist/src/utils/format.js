"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatToDocument = exports.formatToPhoneNumber = void 0;
function formatToPhoneNumber(phone) {
    return phone?.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
}
exports.formatToPhoneNumber = formatToPhoneNumber;
function formatToDocument(document) {
    if (document?.length === 11) {
        return document.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    }
    else if (document?.length === 14) {
        return document.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
    }
    else {
        return document;
    }
}
exports.formatToDocument = formatToDocument;
//# sourceMappingURL=format.js.map