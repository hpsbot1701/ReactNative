
import React, { Component, useEffect, useState } from 'react';
import{Button, Text,View, StyleSheet, TextInput, FlatList, SectionList, TouchableHighlight, TouchableOpacity, ActivityIndicator, Modal, Pressable, StatusBar, Platform}from 'react-native'


const App = ()=> {
    
    return(
      <View>

     <Text style={{fontSize:30}}>Platform:{Platform.OS}</Text>
     {
      Platform.OS==="android"?
      <View style={{backgroundColor:"yellow", height:100, width:100}}></View>
       :
       <View style={{backgroundColor:"red", height:100, width:100}}></View>
       
     }
     <Text style={styles.text}>HIMANSHU</Text>
     <Text style={{fontSize:30}}>{JSON.stringify(Platform.constants.reactNativeVersion)}</Text>

     </View>
     

    )
  }
 
const styles = StyleSheet.create({
 text:{
  fontSize:30,
  color: Platform.OS==="android"? 'blue':'black'
        
 }
})



export default App;
