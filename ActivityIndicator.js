
import React, { Component, useEffect, useState } from 'react';
import{Button, Text,View, StyleSheet, TextInput, FlatList, SectionList, TouchableHighlight, TouchableOpacity, ActivityIndicator}from 'react-native'


const App = ()=> {
    
  const[show,setShow]=useState(false)

  const displayLoader = () =>{
    setShow(true)

    setTimeout(()=>{
      setShow(false)
    },3000)
  }

    return(
      <View style={styles.main}>
        {/* <ActivityIndicator size={40} color="gold"/>
        <ActivityIndicator size={100} color="blue"/> */}

        <ActivityIndicator size={50} color="gold" animating={show}/>
        <Button title='Show Loader' onPress={(displayLoader)} />
       
     </View>
     

    )
  }
 
const styles = StyleSheet.create({
  main:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }

 
})




export default App;
