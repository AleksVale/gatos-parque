import { Container, Logo } from './styles'
import React from 'react'

export const AuthHeader: React.FC = () => {
  return (
    <Container>
      <Logo source={require('../../assets/Logo.png')} />
    </Container>
  )
}
