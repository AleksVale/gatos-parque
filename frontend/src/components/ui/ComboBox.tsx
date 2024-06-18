import * as React from 'react'
import { X } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Command, CommandGroup, CommandItem } from '@/components/ui/command'
import { Command as CommandPrimitive } from 'cmdk'
import { Autocomplete as AutocompleteOption } from '@/services/AutocompleteService'

interface AutocompleteProps {
  value: AutocompleteOption[]
  options: AutocompleteOption[]
  onChange: (value: AutocompleteOption[]) => void
}

export function Autocomplete({
  options,
  value,
  onChange,
}: Readonly<AutocompleteProps>) {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const [open, setOpen] = React.useState(false)
  const [inputValue, setInputValue] = React.useState('')
  const [, setSelected] = React.useState<AutocompleteOption[]>([])

  const handleUnselect = React.useCallback(
    (framework: AutocompleteOption) => {
      setSelected((prev) => {
        const result = prev.filter((s) => s.id !== framework.id)
        onChange(result)
        return result
      })
    },
    [onChange],
  )
  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      const input = inputRef.current
      if (input) {
        if (e.key === 'Delete' || e.key === 'Backspace') {
          if (input.value === '') {
            setSelected((prev) => {
              const newSelected = [...prev]
              newSelected.pop()
              onChange(newSelected)
              return newSelected
            })
          }
        }
        // This is not a default behaviour of the <input /> field
        if (e.key === 'Escape') {
          input.blur()
        }
      }
    },
    [onChange],
  )

  const selectables = options.filter((framework) => !value.includes(framework))
  return (
    <Command
      onKeyDown={handleKeyDown}
      className="overflow-visible bg-transparent"
    >
      <div className="border border-input bg-background focus-within:ring-ring group rounded-md px-3 py-2 text-sm focus-within:ring-2 focus-within:ring-offset-2">
        <div className="flex flex-wrap gap-1">
          {value.map((framework) => {
            return (
              <Badge key={framework.id} variant="secondary">
                {framework.label ?? framework.fullName ?? framework.name}
                <button
                  className="ring-offset-background focus:ring-ring ml-1 rounded-full outline-none focus:ring-2 focus:ring-offset-2"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleUnselect(framework)
                    }
                  }}
                  onMouseDown={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                  }}
                  onClick={() => handleUnselect(framework)}
                >
                  <X className="text-muted-foreground hover:text-foreground size-3" />
                </button>
              </Badge>
            )
          })}
          {/* Avoid having the "Search" Icon */}
          <CommandPrimitive.Input
            ref={inputRef}
            value={inputValue}
            onValueChange={setInputValue}
            onBlur={() => setOpen(false)}
            onFocus={() => setOpen(true)}
            placeholder="Selecione os pontos"
            className="placeholder:text-muted-foreground ml-2 flex-1 bg-transparent outline-none"
          />
        </div>
      </div>
      <div className="relative mt-2">
        {open && selectables.length > 0 ? (
          <div className="bg-popover text-popover-foreground animate-in absolute top-0 z-50 w-full rounded-md border shadow-md outline-none">
            <CommandGroup className="h-full overflow-auto">
              {selectables.map((framework) => {
                return (
                  <CommandItem
                    key={framework.id}
                    onMouseDown={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                    }}
                    onSelect={() => {
                      setInputValue('')
                      setSelected((prev) => {
                        if (
                          prev.some((selected) => selected.id === framework.id)
                        ) {
                          return prev
                        }
                        const result = [...prev, framework]
                        onChange(result)
                        return result
                      })
                    }}
                    className={'cursor-pointer'}
                  >
                    {framework.name}
                  </CommandItem>
                )
              })}
            </CommandGroup>
          </div>
        ) : null}
      </div>
    </Command>
  )
}
