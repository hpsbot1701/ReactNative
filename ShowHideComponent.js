
import React, { Component, useEffect, useState } from 'react';
import{Button, Text,View, StyleSheet, TextInput, FlatList, SectionList}from 'react-native'
import Student from './components/Student';

const App = ()=> {
  
const[show,setShow]=useState(false)
    return(
    <View>
      <Text style={{fontSize:30}}>Show/Hide Component</Text>
      <Button title='toggle Component' onPress={()=>setShow(!show)}/>
      
      {
         show? <User/>:null
      }
     
    </View>

    )
  }
 

 const User = () => {
  return(
      <View>
        <Text style={{fontSize:30,color:"red"}}>User Component</Text>
      </View>

  )
 }




export default App;
