import { zodMessages } from './zodMessage';

describe('zodMessages', () => {
  it('should return required message', () => {
    expect(zodMessages.required).toBe('Campo obrigatório');
  });

  it('should return invalid email message', () => {
    expect(zodMessages.invalidEmail).toBe('E-mail inválido');
  });

  it('should return invalid CPF message', () => {
    expect(zodMessages.invalidCpf).toBe('Documento inválido');
  });

  it('should return min characters message', () => {
    const min = '5';
    const message = zodMessages.min(min);
    expect(message).toBe(`Mínimo de ${min} caracteres`);
  });
});
