
import React, { Component, useEffect, useRef, useState } from 'react';
import{Button, Text,View, StyleSheet, TextInput, ScrollView, FlatList, Modal, useAnimatedValue}from 'react-native'

const App = ()=> {

  const input = useRef();
  
    const updateInput = () =>{
     console.warn("call");
     input.current.focus();
     input.current.setNativeProps({
      fontSize:30,
      color:'blue'
     })
    }
    return(
   <View style={{flex:1,padding:16}}>
    <TextInput ref={input} placeholder='Enter Name' style={styles.input}/>
    <TextInput placeholder='Enter Age' style={styles.input}/>
    <Button title='Update' onPress={updateInput}/>
  
    

   </View>   

    )
  }

  const styles = StyleSheet.create({
    input:{
      borderWidth:2,
      borderColor:'skyblue',
      margin:10
    }
  })
   

 


export default App;
