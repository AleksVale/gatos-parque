import React from 'react'
import {
  ProfileContainer,
  AvatarContainer,
  AvatarImage,
  ButtonContainer,
  ButtonText,
} from './styles'
import { useAuth } from '../../hooks/useAuth'

export const Profile: React.FC = () => {
  const { logout } = useAuth()

  return (
    <ProfileContainer>
      <AvatarContainer>
        <AvatarImage
          source={{
            uri: 'https://gravatar.com/avatar/fc35c05025ae6a4c9c850054afbdb53e?s=400&d=robohash&r=x',
          }}
        />
      </AvatarContainer>
      <ButtonContainer onPress={logout}>
        <ButtonText>Editar Perfil</ButtonText>
      </ButtonContainer>
      <ButtonContainer onPress={logout}>
        <ButtonText>Deslogar</ButtonText>
      </ButtonContainer>
    </ProfileContainer>
  )
}
