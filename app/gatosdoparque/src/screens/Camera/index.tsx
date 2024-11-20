import React, { useRef } from 'react'
import { CaptureButton, CaptureIcon, Container } from './styles'
import { Camera, useCameraDevice } from 'react-native-vision-camera'
import { StyleSheet, Text } from 'react-native'
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types'
import { IRootStackParamList } from '../../Interfaces/NavigationInterface'
import { RouteService } from '../../services/routes.service'

export function CameraComponent({
  navigation,
  route,
}: NativeStackScreenProps<IRootStackParamList, 'Camera'>) {
  const camera = useRef<Camera>(null)
  const device = useCameraDevice('back')
  const { pointId, routeId } = route.params

  const takePhoto = async () => {
    try {
      if (camera.current) {
        const photo = await camera.current.takePhoto()
        const response = await RouteService.checkIn(routeId, pointId)
        if (response.data.success) {
          await RouteService.checkInPhoto(routeId, pointId, photo)
          navigation.goBack()
        }
      }
    } catch (err) {
      console.log(JSON.stringify(err, null, 2))
    }
  }
  if (device == null) return <Text>Camera not found</Text>

  return (
    <Container>
      <Camera
        ref={camera}
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
        photo={true}
      />
      <CaptureButton onPress={takePhoto}>
        <CaptureIcon name="camera" />
      </CaptureButton>
    </Container>
  )
}
