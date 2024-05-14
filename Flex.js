
import React, { Component, useEffect, useState } from 'react';
import{Button, Text,View, StyleSheet, TextInput, FlatList, SectionList}from 'react-native'


const App = ()=> {

    return(
      <View style={styles.main}>
    <View style={styles.Box1}>
    <View style={styles.InnerBox1}></View>
    <View style={styles.InnerBox2}></View>
    <View style={styles.InnerBox3}></View>
    </View>
      <View style={styles.Box2}></View>
      <View style={styles.Box3}></View>
      
     </View>
     

    )
  }
 
 const styles = StyleSheet.create({
  main:{
    flex:1,
    margin: 10,
  },
  Box1:{
    flex:1, backgroundColor: "orange",
    margin:10,
    flexDirection:"row"
  },
  Box2:{
    flex:1, backgroundColor: "yellow"
  },
  Box3:{
    flex:1, backgroundColor: "blue"
  },
  InnerBox1:{
    flex: 1,
    backgroundColor:"skyblue"
  },
  InnerBox2:{
    flex: 1,
    backgroundColor:"red"
  },
  InnerBox3:{
    flex: 1,
    backgroundColor:"black"
  }
 })




export default App;
