import styled from 'styled-components/native'
import { Camera } from 'react-native-vision-camera'
import Ionicons from '@expo/vector-icons/Ionicons'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  background-color: #000;
`

export const StyledCamera = styled(Camera)`
  flex: 1;
`

export const CaptureButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 20px;
  left: 44%;
  width: 70px;
  height: 70px;
  border-radius: 35px;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`

export const CaptureIcon = styled(Ionicons).attrs({
  name: 'camera',
  size: 30,
})`
  color: #000;
`
