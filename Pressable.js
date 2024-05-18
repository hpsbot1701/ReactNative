
import React, { Component, useEffect, useState } from 'react';
import{Button, Text,View, StyleSheet, TextInput, FlatList, SectionList, TouchableHighlight, TouchableOpacity, ActivityIndicator, Modal, Pressable}from 'react-native'


const App = ()=> {
    const[showModal,setShowModal]=useState(false)
    return(
      <View style={styles.main}>
      <Pressable 
      // onPress={()=>{console.warn("Normal On Press")}}
      // onLongPress={()=>{console.warn("Long Press")}}
      onPressIn={()=>{console.warn("Press In")}}
      onPressOut={()=>{console.warn("Press Out")}}
      >

        <Text style={styles.pressableBtn}>Pressable</Text>
      </Pressable>

       
     </View>
     

    )
  }
 
const styles = StyleSheet.create({
  main:{
    flex:1,
    justifyContent:'center'
  },
  pressableBtn:{
     backgroundColor:"skyblue",
     color:"#fff",
     padding:20,
     margin:10,
     textAlign:'center',
     borderRadius:10,
     borderColor:'#000',
     fontSize:20,
     shadowColor:"#000",
     elevation:5
    
  }
})



export default App;
