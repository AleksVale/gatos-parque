import { TouchableOpacity } from 'react-native'
import { InputProps } from '.'
import React, { useState } from 'react'

import Ionicons from '@expo/vector-icons/Ionicons'
import styled from 'styled-components/native'

interface PasswordInputProps extends InputProps {}

const Container = styled.View`
  width: 100%;
  margin-bottom: 8px;
`

const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  border-width: 1px;
  border-color: ${({ theme }) => theme['base-input']};
  background-color: ${({ theme }) => theme.white};
  border-radius: 4px;
  padding: 8px;
`

const StyledTextInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: ${({ theme }) => theme['base-text']};
`

const ErrorText = styled.Text`
  color: red;
  font-size: 12px;
  margin-top: 4px;
`

export const PasswordInput: React.FC<PasswordInputProps> = ({ ...rest }) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <Container>
      <InputContainer>
        <StyledTextInput {...rest} secureTextEntry={!showPassword} />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Ionicons
            name={showPassword ? 'eye-off' : 'eye'}
            size={24}
            color="gray"
          />
        </TouchableOpacity>
      </InputContainer>
      {rest.error && <ErrorText>{rest.error}</ErrorText>}
    </Container>
  )
}
