
import React, { Component, useEffect, useRef, useState } from 'react';
import{Button, Text,View, StyleSheet, TextInput, ScrollView, FlatList, Modal, useAnimatedValue}from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const App = ()=> {
 
const[user,setUser] = useState('')

 const setData=async()=>{
  await AsyncStorage.setItem("user","Himanshu Pratap")
 }

 const getData=async()=>{
  const name = await AsyncStorage.getItem("user")
  setUser(name)
  
 }

 const removeData=async()=>{
  await AsyncStorage.removeItem("user")
  setUser('')
 }

  
    
    return(
    <View style={{marginTop:100, marginLeft:30, marginBottom:20}}>
      <Text style={{fontSize:40}}>AsyncStorage with React Native | {user}</Text>
      <Button title='Set Date' onPress={setData}/>
      <Button title='Get Date' onPress={getData}/>
      <Button title='Remove Date' onPress={removeData}/>
    </View>

    )
  }

   

 


export default App;
