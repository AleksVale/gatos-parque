import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  padding: 10px;
  justify-content: center;
  background-color: ${(props) => props.theme.background};
`

export const Card = styled.View`
  background-color: ${(props) => props.theme.green};
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 10px;
`

export const PointName = styled.Text`
  font-size: 20px;
  color: ${(props) => props.theme.text};
`

export const PointReference = styled.Text`
  font-size: 16px;
  color: ${(props) => props.theme.textSecondary};
`

export const CheckInButton = styled.TouchableOpacity`
  background-color: ${(props) => props.theme['green-dark']};
  padding: 10px;
  border-radius: 5px;
  align-items: center;
  margin-top: 10px;
`

export const ButtonText = styled.Text`
  color: ${(props) => props.theme.white};
  font-size: 16px;
`
