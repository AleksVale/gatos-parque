import http from '@/lib/http'

export interface Autocomplete {
  id: string
  name?: string
  fullName?: string
  label?: string
}

interface AutocompleteResponse {
  roles?: Autocomplete[]
  users?: Autocomplete[]
  points?: Autocomplete[]
}

const fetchAutocomplete = async (fields: string[]) => {
  return http.get<AutocompleteResponse>(
    `/autocomplete?fields=${fields.join(',')}`,
  )
}

const AutocompleteService = {
  fetchAutocomplete,
}

export default AutocompleteService
