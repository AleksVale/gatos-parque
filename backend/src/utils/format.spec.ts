import { formatToPhoneNumber, formatToDocument } from './format';

describe('formatToPhoneNumber', () => {
  it('should format phone number correctly', () => {
    const phone = '12345678901';
    const formattedPhone = formatToPhoneNumber(phone);
    expect(formattedPhone).toBe('(12) 34567-8901');
  });

  it('should return undefined if phone is undefined', () => {
    const formattedPhone = formatToPhoneNumber(undefined);
    expect(formattedPhone).toBeUndefined();
  });
});

describe('formatToDocument', () => {
  it('should format CPF correctly', () => {
    const cpf = '12345678901';
    const formattedCpf = formatToDocument(cpf);
    expect(formattedCpf).toBe('123.456.789-01');
  });

  it('should format CNPJ correctly', () => {
    const cnpj = '12345678000199';
    const formattedCnpj = formatToDocument(cnpj);
    expect(formattedCnpj).toBe('12.345.678/0001-99');
  });

  it('should return document as is if length is not 11 or 14', () => {
    const document = '12345';
    const formattedDocument = formatToDocument(document);
    expect(formattedDocument).toBe('12345');
  });

  it('should return undefined if document is undefined', () => {
    const formattedDocument = formatToDocument(undefined);
    expect(formattedDocument).toBeUndefined();
  });
});
