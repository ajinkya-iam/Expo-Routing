import { View, Text } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'

export default function PostDestails() {
    const {id} = useLocalSearchParams()
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Stack.Screen options={{
        title: "Post Details " + id
      }}/>
      <Text>Post Destails {id}</Text>
    </View>
  )
}