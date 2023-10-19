import { View, Text, Button } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function Page() {
  return (
    <View style={{flex:1 , justifyContent:'center', alignItems:'center'}}>
      <Text>Home</Text>
      <Link href="/register" asChild>
        <Button title='Open Regsiter Page'/>
      </Link>
      <Link href="/one" asChild>
        <Button title='Open Tabs'/>
      </Link>
    </View>
  )
}