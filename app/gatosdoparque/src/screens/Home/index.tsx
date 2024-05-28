import React from 'react'
import { View, Text } from 'react-native'

export function Home() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <Text>Gatos do Parque</Text>
      <Text>Seja bem-vindo ao aplicativo dos gatos do parque!</Text>
      <Text>
        Aqui você pode ver fotos dos gatos do parque, saber mais sobre eles e
        até adotar um!
      </Text>
    </View>
  )
}
