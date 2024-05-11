import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useTranslation } from 'react-i18next'
import { doocumentMask, phoneMask } from '@/lib/mask'
import { useMaskito } from '@maskito/react'
import { DatePicker } from '@/components/date-picker'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { UseFormReturn } from 'react-hook-form'
import AutocompleteService, {
  Autocomplete,
} from '@/services/AutocompleteService'
import { useState, useCallback, useEffect } from 'react'
import { TCreateUserSchema } from '../validation'
import { useGoBack } from '@/hooks/useGoBack'

const STATUS_OPTIONS = [
  { id: 'ACTIVE', label: 'Ativo' },
  { id: 'INACTIVE', label: 'Inativo' },
  { id: 'BLOCKED', label: 'Bloqueado' },
]

interface CreateEditUserFormProps {
  form: UseFormReturn<TCreateUserSchema>
  onSubmitForm: (data: TCreateUserSchema) => void
  isEdit?: boolean
}

export function CreateEditUserForm({
  form,
  onSubmitForm,
  isEdit = false,
}: CreateEditUserFormProps) {
  const { t } = useTranslation()
  const [rolesOptions, setRolesOptions] = useState<Autocomplete[]>([])

  const { goBack } = useGoBack()
  const documentRef = useMaskito({ options: doocumentMask })

  const phoneRef = useMaskito({ options: phoneMask })

  const fetchRolesOptions = useCallback(async () => {
    const response = await AutocompleteService.fetchAutocomplete(['roles'])
    setRolesOptions(response.data.roles ?? [])
    form.setValue('roleId', form.getValues('roleId'))
  }, [form])

  useEffect(() => {
    fetchRolesOptions()
  }, [fetchRolesOptions])

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmitForm)}
        className="space-y-4 w-full bg-secondary p-4 rounded mt-6"
      >
        <div className="grid grid-cols-3 gap-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input placeholder="Nome" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Sobrenome</FormLabel>
                <FormControl>
                  <Input placeholder="Sobrenome" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('Form.Email')}</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="E-mail"
                    autoComplete="new-password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="dateOfBirth"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Data de nascimento</FormLabel>
                <FormControl>
                  <DatePicker
                    {...field}
                    selected={field.value ? new Date(field.value) : undefined}
                    onSelect={field.onChange}
                    layout="dropdown"
                    maxYear={new Date().getFullYear() - 18}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="roleId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Perfil</FormLabel>
                <FormControl>
                  <Select
                    value={`${field.value}`}
                    onValueChange={field.onChange}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione um perfil" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {rolesOptions.map((role) => (
                        <SelectItem key={role.id} value={role.id}>
                          {role.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Perfil</FormLabel>
                <FormControl>
                  <Select
                    value={`${field.value}`}
                    onValueChange={field.onChange}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione um status" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {STATUS_OPTIONS.map((role) => (
                        <SelectItem key={role.id} value={role.id}>
                          {role.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Número de telefone</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Insira o número de telefone"
                    {...field}
                    ref={phoneRef}
                    onInput={(evt) => {
                      form.setValue('phoneNumber', evt.currentTarget.value)
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="document"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Documento</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Insira o documento"
                    {...field}
                    ref={documentRef}
                    onInput={(evt) => {
                      form.setValue('document', evt.currentTarget.value)
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {!isEdit && (
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('Form.Password')}</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder={t('Form.Password')}
                      autoComplete="new-password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
        </div>
        <div className="flex gap-2 justify-end">
          <Button onClick={goBack} type="button" variant={'destructive'}>
            Cancelar
          </Button>
          <Button type="submit">{isEdit ? 'Atualizar' : 'Criar'}</Button>
        </div>
      </form>
    </Form>
  )
}
