
import React, { Component, useEffect, useState } from 'react';
import{Button, Text,View, StyleSheet, TextInput, FlatList, SectionList, TouchableHighlight, TouchableOpacity, ActivityIndicator, Modal, Pressable, StatusBar}from 'react-native'


const App = ()=> {
    const[hide,setHide] = useState(false)
    const[barStyle,setBarStyle] = useState('default')
    return(
      <View style={styles.main}>
        <StatusBar
        backgroundColor="orange"
        barStyle={barStyle}
        hidden={hide}
        />
     <Button title='Toggle status bar on' onPress={()=>setHide(!hide)}/>
     <Button title='Update Style' onPress={()=>setBarStyle("dark-content")}/>


       
     </View>
     

    )
  }
 
const styles = StyleSheet.create({
  main:{
    flex:1,
    justifyContent:'center'
  }
})



export default App;
