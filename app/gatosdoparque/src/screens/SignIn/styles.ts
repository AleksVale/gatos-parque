import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.background};
  padding: 20px;
  align-items: center;
  justify-content: center;
`

export const Logo = styled.Image`
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
`

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${(props) => props.theme['base-title']};
  margin-bottom: 20px;
`

export const Button = styled.TouchableOpacity`
  width: 100%;
  padding: 15px;
  border-radius: 5px;
  background-color: ${(props) => props.theme['green-dark']};
  align-items: center;
  margin-top: 10px;
`

export const ButtonText = styled.Text`
  color: ${(props) => props.theme.white};
  font-size: 16px;
`

export const Link = styled.Text`
  color: ${(props) => props.theme['green-dark']};
  margin-top: 20px;
`

export const ErrorMessage = styled.Text`
  color: red;
  font-size: 12px;
  margin: 4px 0;
`
