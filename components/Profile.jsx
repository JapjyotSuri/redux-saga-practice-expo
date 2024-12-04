import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateAgeReducer, userReducer } from '@/features/updateNameSlice'
import { jokeReducer } from '@/features/updateJokeSlice'
const Profile = () => {
    const state=useSelector((state) => state.user)
    const jokeState=useSelector((state) => state.joke)
    const dispatch=useDispatch();

  return (
    <View>
      <Text>I am {state.name}</Text>
      <Text>my age is {state.age}</Text>
      <Text>{jokeState.joke}</Text>
      <Pressable onPress={() =>{
        dispatch(userReducer());
        dispatch(updateAgeReducer());
        }}><Text>Update Name</Text></Pressable>
        <Pressable onPress={() =>{
        dispatch(jokeReducer());
        
        }}><Text>Update Joke</Text></Pressable>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})