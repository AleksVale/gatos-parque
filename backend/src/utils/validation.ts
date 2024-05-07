import { cpf } from 'cpf-cnpj-validator';
export class Validator {
  static validateCPF(value: string) {
    return cpf.isValid(value);
  }
}
