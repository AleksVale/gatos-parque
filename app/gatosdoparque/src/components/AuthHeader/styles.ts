import styled from 'styled-components/native'

interface IImageProps {
  keyboard?: boolean
}

export const Container = styled.View`
  width: 100%;
  height: 150px;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  z-index: 99;
  background-color: ${({ theme }) => theme['green-light']};
`

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 16px;
`

export const Logo = styled.Image<IImageProps>`
  z-index: 99;
  width: 150px;
  height: 150px;
  margin: 0 auto ${({ keyboard }) => (keyboard ? '0' : '-150px')};
`
