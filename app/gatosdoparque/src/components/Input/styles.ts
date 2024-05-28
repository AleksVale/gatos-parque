import styled from 'styled-components/native'

export const StyledInput = styled.TextInput`
  width: 100%;
  padding: 15px;
  border-radius: 5px;
  background-color: ${(props) => props.theme['base-input']};
  color: ${(props) => props.theme['base-text']};
`

export const ErrorMessage = styled.Text`
  color: red;
  font-size: 12px;
  margin: 4px 0;
`

export const InputContainer = styled.View`
  width: 100%;
  margin-bottom: 10px;
`
