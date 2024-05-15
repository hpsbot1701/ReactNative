
import React, { Component, useEffect, useState } from 'react';
import{Button, Text,View, StyleSheet, TextInput, FlatList, SectionList, TouchableHighlight}from 'react-native'


const App = ()=> {

    return(
      <View style={styles.main}>
        <TouchableHighlight>
      <Text style={styles.button}>Button</Text>
      </TouchableHighlight>
      <TouchableHighlight>
      <Text style={[styles.button, styles.success]}>Success</Text>
      </TouchableHighlight>
      <TouchableHighlight>
      <Text style={[styles.button, styles.primary]}>Primary</Text>
      </TouchableHighlight>
      <TouchableHighlight>
      <Text style={[styles.button, styles.error]}>Error</Text>
      </TouchableHighlight>
      <TouchableHighlight>
      <Text style={[styles.button, styles.warn]}>Warn</Text>
      </TouchableHighlight>
     </View>
     

    )
  }
 
const styles = StyleSheet.create({
  main:{
    flex:1
  },
  button:{
    backgroundColor:"skyblue",
    fontSize:30,
    color:"red",
    textAlign:'center',
    padding:10,
    margin:10,
    borderColor:"black",
    borderRadius:10,
    shadowColor:'red',
    elevation:10,
    shadowOpacity:1
  },
  success:{
    backgroundColor:"yellow",
    color:"blue"
  },
  primary:{
    backgroundColor:"blue",
    color:'black'
  },
  error:{
    backgroundColor:"green",
    color:'blue'
  },
  warn:{
    backgroundColor:"orange",
    color:'red'
  }
})




export default App;
