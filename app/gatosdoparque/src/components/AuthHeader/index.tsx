import { Container, Logo } from './styles'
import React from 'react'
interface IAuthHeaderProps {
  keyboard?: boolean
}

export const AuthHeader: React.FC<IAuthHeaderProps> = ({ keyboard }) => {
  return (
    <Container>
      <Logo keyboard={keyboard} source={require('../../assets/Logo.png')} />
    </Container>
  )
}
