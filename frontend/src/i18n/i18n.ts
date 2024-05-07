import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import translation from './pt-BR/translation.json'

const resources = {
  ptBR: {
    translation,
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'ptBR',
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
})

export default i18n
