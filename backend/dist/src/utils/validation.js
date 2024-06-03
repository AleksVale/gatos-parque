"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validator = void 0;
const cpf_cnpj_validator_1 = require("cpf-cnpj-validator");
class Validator {
    static validateCPF(value) {
        return cpf_cnpj_validator_1.cpf.isValid(value);
    }
}
exports.Validator = Validator;
//# sourceMappingURL=validation.js.map