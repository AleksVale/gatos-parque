import { cpf } from 'cpf-cnpj-validator'

export function validateCPF(value: string) {
  return cpf.isValid(value)
}
