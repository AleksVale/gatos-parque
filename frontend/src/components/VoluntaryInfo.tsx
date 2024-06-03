import { Input } from './ui/input'

interface VoluntaryInfoProps {
  label: string
  value: string
}

export function VoluntaryInfo({ label, value }: Readonly<VoluntaryInfoProps>) {
  return (
    <div className="space-y-1">
      <strong>{label}: </strong>
      <Input value={value} className="disabled:opacity-80" />
    </div>
  )
}
