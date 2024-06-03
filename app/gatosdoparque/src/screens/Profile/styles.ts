// ProfileScreen.styles.ts
import styled from 'styled-components/native'

export const ProfileContainer = styled.ScrollView.attrs({
  contentContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
})`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  padding: 60px;
`

export const AvatarContainer = styled.View`
  align-items: center;
  margin-top: 20px;
`

export const AvatarImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`

export const ButtonContainer = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme['green-dark']};
  padding: 15px;
  margin: 20px 20px 0;
  border-radius: 5px;
  align-items: center;
  width: 100%;
`

export const ButtonText = styled.Text`
  color: white;
  font-weight: bold;
`
