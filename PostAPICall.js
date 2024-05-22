
import React, { Component, useEffect, useState } from 'react';
import{Button, Text,View, StyleSheet, TextInput, ScrollView, FlatList}from 'react-native'

const App = ()=> {
  
  const saveAPIData = async() => {
    const data = {
      name:"Sam",
      age: 34,
      email:"sam@test"
    }
    const url = "http://10.0.2.2:3000/users"
    let result = await fetch(url,{
      method:"Post",
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify(data)

    })
    result = await result.json()
    console.warn(result)
  }
  
    
    return(
   <View>
    <Text style={{fontSize:30}}>Post API Call</Text>
    <Button title='Save Data' onPress={saveAPIData}/>
   </View>
       
   
     

    )
  }

  

 


export default App;
