import React, { useCallback, useState } from 'react'
import { FlatList } from 'react-native'
import { FeedService } from '../../services/feed.service'
import {
  DEFAULT_META_PAGINATION,
  PaginationMeta,
} from '../../Interfaces/Pagination'
import { IFeed } from '../../Interfaces/IFeed'
import { useFocusEffect } from '@react-navigation/native'
import { Container } from './styles'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { FeedCard } from '../../components/FeedCard'
import { BaseHeader } from '../../components/BaseHeader'

export function Home() {
  const [data, setData] = useState<IFeed[]>([])
  const [meta, setMeta] = useState<PaginationMeta>(DEFAULT_META_PAGINATION)
  const insets = useSafeAreaInsets()

  const getFeeds = useCallback(async () => {
    const response = await FeedService.getAllFeeds(
      meta.currentPage,
      meta.perPage,
    )
    setData(response.data.data)
    setMeta(response.data.meta)
  }, [meta.currentPage, meta.perPage])

  useFocusEffect(
    React.useCallback(() => {
      getFeeds()
    }, [getFeeds]),
  )
  return (
    <Container
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
    >
      <BaseHeader label="Postagens" />
      <FlatList
        data={data}
        keyExtractor={(item: IFeed) => item.id}
        renderItem={({ item }: { item: IFeed }) => (
          <FeedCard description={item.description} title={item.title} />
        )}
      />
    </Container>
  )
}
