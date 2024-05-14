
import React, { Component, useEffect, useState } from 'react';
import{Button, Text,View, StyleSheet, TextInput, FlatList, SectionList}from 'react-native'


const App = ()=> {
  const[show,setShow]=useState(true)
    return(
    <View>
      <Text style={{fontSize:30}}>useEffect for Unmount component</Text>
      <Button title='Toggle' onPress={()=>setShow(!show)}/>
      {
        show?<Student />:null
      }
     </View>

    )
  }
 
const Student = () => {
 
 let timer =  setInterval(()=>{
      console.warn("Timer called");
  },2000)
  useEffect(()=>{
    return() => clearInterval(timer)
  })
  return(
    <View>
      <Text style={{fontSize:30,color:"red"}}>Student Component</Text>
    </View>
  )
}
 




export default App;
