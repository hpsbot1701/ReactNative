
import React, { Component, useEffect, useState } from 'react';
import{Button, Text,View, StyleSheet, TextInput}from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'

const Tab = createMaterialTopTabNavigator();
const App = ()=> {


    
    return(
   
    <NavigationContainer>
      <Tab.Navigator>

        <Tab.Screen name='Login' component={Login} />
        <Tab.Screen name='SignUP' component={SignUP} />
        <Tab.Screen name='Other' component={SignUP} />
        
      </Tab.Navigator>
    </NavigationContainer>
       
   
     

    )
  }

  
const Login = ()=>{
  return(
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text style={{fontSize:30}}>Login</Text>
    </View>
  )
}

const SignUP = ()=>{
  return(
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text style={{fontSize:30}}>SignUP</Text>
    </View>
  )
}

 


export default App;
