import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userReducer } from '@/features/updateNameSlice'
const Profile = () => {
    const state=useSelector((state) => state.user)
    const dispatch=useDispatch();

  return (
    <View>
      <Text>I am {state.name}</Text>
      <Text>my age is {state.age}</Text>
      <Pressable onPress={() => dispatch(userReducer())}><Text>Update Name</Text></Pressable>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})