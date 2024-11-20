import { Text } from 'react-native'
import { IFeed } from '../../Interfaces/IFeed'
import { FeedView } from './styles'
import React from 'react'

export const FeedCard: React.FC<Pick<IFeed, 'title' | 'description'>> = ({
  description,
  title,
}) => {
  return (
    <FeedView>
      <Text>{title}</Text>
      <Text>{description}</Text>
    </FeedView>
  )
}
