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
import { useGoBack } from '@/hooks/useGoBack'
import { UseFormReturn } from 'react-hook-form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { TCreateRouteSchema } from '../validation'
import { useCallback, useEffect, useState } from 'react'
import AutocompleteService, {
  Autocomplete as IAutocomplete,
} from '@/services/AutocompleteService'
import { Autocomplete } from '@/components/ui/ComboBox'
import { Checkbox } from '@/components/ui/checkbox'

interface CreateEditRouteFormProps {
  form: UseFormReturn<TCreateRouteSchema>
  onSubmitForm: (data: TCreateRouteSchema) => void
  isEdit?: boolean
  pointsForm: number[]
}

export function CreateEditRouteForm({
  form,
  onSubmitForm,
  isEdit = false,
  pointsForm,
}: CreateEditRouteFormProps) {
  const { goBack } = useGoBack()
  const [users, setUsers] = useState<IAutocomplete[]>([])
  const [points, setPoints] = useState<IAutocomplete[]>([])

  const fetchUserOptions = useCallback(async () => {
    const response = await AutocompleteService.fetchAutocomplete([
      'users',
      'points',
    ])
    setUsers(response.data.users ?? [])
    setPoints(response.data.points ?? [])
    const formPoints = response.data.points?.filter((point) =>
      pointsForm.includes(Number(point.id)),
    )
    form.setValue(
      'points',
      formPoints as unknown as { name: string; id: number }[],
    )
  }, [form, pointsForm])

  useEffect(() => {
    fetchUserOptions()
  }, [fetchUserOptions])

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmitForm)}
        className="space-y-4 w-full bg-secondary p-4 rounded mt-6"
      >
        <div className="grid grid-cols-3 gap-4">
          <FormField
            control={form.control}
            name="name"
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
            name="userId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Usuário</FormLabel>
                <FormControl>
                  <Select
                    value={`${field.value}`}
                    onValueChange={field.onChange}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione um usuário" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {users.map((user) => (
                        <SelectItem key={user.id} value={user.id}>
                          {user.fullName}
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
            name="points"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pontos</FormLabel>
                <FormControl>
                  <Autocomplete
                    options={points}
                    value={field.value as unknown as IAutocomplete[]}
                    onChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-col items-center p-6">
          <p>Dias da semana em que deverão ser feitas as visitas</p>
          <div className="flex gap-4 py-6">
            <div className="flex flex-col items-center">
              <p className="text-sm font-bold">Segunda-feira</p>
              <FormField
                control={form.control}
                name="monday"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-col items-center">
              <p className="text-sm font-bold">Terça-feira</p>
              <FormField
                control={form.control}
                name="tuesday"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex flex-col items-center">
              <p className="text-sm font-bold">Quarta-feira</p>
              <FormField
                control={form.control}
                name="wednesday"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex flex-col items-center">
              <p className="text-sm font-bold">Quinta-feira</p>
              <FormField
                control={form.control}
                name="thursday"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex flex-col items-center">
              <p className="text-sm font-bold">Sexta-feira</p>
              <FormField
                control={form.control}
                name="friday"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex flex-col items-center">
              <p className="text-sm font-bold">Sábado</p>
              <FormField
                control={form.control}
                name="saturday"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex flex-col items-center">
              <p className="text-sm font-bold">Domingo</p>
              <FormField
                control={form.control}
                name="sunday"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
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
