import React from 'react'
import { TextHeader } from './styles'

export const BaseHeader: React.FC<{ label: string }> = ({ label }) => {
  return <TextHeader>{label}</TextHeader>
}
