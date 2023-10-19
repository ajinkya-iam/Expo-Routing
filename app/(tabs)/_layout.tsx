import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

export default function _layout() {
  return (
    <Tabs>
        <Tabs.Screen name="one" options={{ title: 'One' }} />
        <Tabs.Screen name="two" options={{ title: 'Two' }} />
        <Tabs.Screen name="posts" options={{ title: 'Posts', headerShown:false }} />
    </Tabs>
  )
}