import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function Posts() {
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Link style={{fontSize:20}} href="/posts/1">Post 1</Link>
      <Link style={{fontSize:20}} href="/posts/2">Post 2</Link>
      <Link style={{fontSize:20}} href="/posts/3">Post 3</Link>
    </View>
  )
}