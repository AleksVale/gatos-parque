export function formatToPhoneNumber(phone?: string) {
  return phone?.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
}

export function formatToDocument(document?: string) {
  if (document?.length === 11) {
    // Formatar como CPF
    return document.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
  } else if (document?.length === 14) {
    // Formatar como CNPJ
    return document.replace(
      /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
      '$1.$2.$3/$4-$5',
    )
  } else {
    return document
  }
}
