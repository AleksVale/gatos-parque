import { format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'
import { ptBR } from 'date-fns/locale'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Input } from './ui/input'
import { useCallback, useState } from 'react'

interface DatePickerProps {
  selected?: Date
  onSelect: (date: Date | undefined) => void
  minYear?: number
  maxYear?: number
  layout?: 'dropdown' | 'buttons'
  showTime?: boolean
}

export function DatePicker({
  selected,
  onSelect,
  minYear = 1900,
  maxYear = new Date().getFullYear(),
  layout = 'buttons',
  showTime = false,
}: Readonly<DatePickerProps>) {
  const [time, setTime] = useState('')
  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 5) return
    setTime((prev) => {
      if (prev.length === 1 && e.target.value.length === 2) {
        return e.target.value + ':'
      }
      return e.target.value
    })
  }

  const handleSelectTime = useCallback(
    (select: Date | undefined) => {
      if (showTime && select && time) {
        const [hours, minutes] = time.split(':')
        const date = select ?? new Date()
        date.setUTCHours(Number(hours))
        date.setUTCMinutes(Number(minutes))
        onSelect(date)
        return
      }
      onSelect(select)
    },
    [onSelect, showTime, time],
  )
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'w-full justify-start text-left font-normal',
            !selected && 'text-muted-foreground',
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {selected ? (
            format(selected, 'dd/MM/yyyy')
          ) : (
            <span>Selecione uma data</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={selected}
          onSelect={handleSelectTime}
          captionLayout={layout}
          fromYear={minYear}
          toYear={maxYear}
          locale={ptBR}
          defaultMonth={selected ?? new Date()}
        />
        {showTime && (
          <div className="px-4 pb-2">
            Hora
            <Input
              onChange={handleTimeChange}
              value={time}
              placeholder="HH:MM"
            />
          </div>
        )}
      </PopoverContent>
    </Popover>
  )
}
