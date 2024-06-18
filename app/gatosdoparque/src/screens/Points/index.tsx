// index.tsx
import React, { FC, useCallback, useEffect, useState } from 'react'
import {
  Container,
  Card,
  PointName,
  PointReference,
  CheckInButton,
  ButtonText,
} from './styles'
import { RouteService } from '../../services/routes.service'
import { IRouteResponseDto } from '../../Interfaces/IRoutes'
import { Text } from 'react-native'
import { useCameraPermission } from 'react-native-vision-camera'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { IRootStackParamList } from '../../Interfaces/NavigationInterface'

export const Points: FC<
  NativeStackScreenProps<IRootStackParamList, 'Points'>
> = ({ navigation, route }) => {
  const [routes, setRoutes] = useState<IRouteResponseDto>()
  const { hasPermission, requestPermission } = useCameraPermission()

  const getRoutes = useCallback(async () => {
    const { data } = await RouteService.getAllRoutes(1, 10)
    setRoutes(data.data[0])
  }, [])
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]
  const date = new Date()
  const today = days[date.getDay()]

  useEffect(() => {
    getRoutes()
    if (!hasPermission) {
      requestPermission()
    }
  }, [getRoutes, hasPermission, requestPermission])

  return (
    <Container>
      {routes?.[today.toLowerCase() as keyof typeof routes] ? (
        routes?.RoutePoint.map((routePoint) => (
          <Card key={routePoint.point.id}>
            <PointName>{routePoint.point.name}</PointName>
            <PointReference>{routePoint.point.reference}</PointReference>
            <CheckInButton
              onPress={() =>
                navigation.navigate('Camera', {
                  pointId: routePoint.point.id,
                  routeId: routes.id,
                })
              }
            >
              <ButtonText disabled={routePoint.checkin}>
                Fazer check-in
              </ButtonText>
            </CheckInButton>
          </Card>
        ))
      ) : (
        <Text>Sem rotas hoje</Text>
      )}
    </Container>
  )
}
