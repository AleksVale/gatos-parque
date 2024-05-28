import React from 'react'
import { ErrorMessage, InputContainer, StyledInput } from './styles'
import { TextInputProps } from 'react-native'

export interface InputProps extends TextInputProps {
  error?: string
}

export const InputText: React.FC<InputProps> = ({
  error,
  ...rest
}: InputProps) => {
  return (
    <InputContainer>
      <StyledInput {...rest} />
      <ErrorMessage>{error}</ErrorMessage>
    </InputContainer>
  )
}
