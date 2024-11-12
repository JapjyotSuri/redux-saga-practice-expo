import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../store/store'
import Profile from '../components/Profile'

const HomeComponent = () => {
  return (
    <Provider store={store}>
        <Profile></Profile>
    </Provider>
  )
}

export default HomeComponent

const styles = StyleSheet.create({})