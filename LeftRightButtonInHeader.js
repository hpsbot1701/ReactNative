
import React, { Component, useEffect, useState } from 'react';
import{Button, Text,View, StyleSheet, TextInput}from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {Login} from './components/Login';
import {Home} from './components/Home';

const Stack = createNativeStackNavigator();
const App = ()=> {
 const btnAction =()=>{
  console.warn("BTN Presed")
 }

    
    return(
   
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{
        headerStyle:{
          backgroundColor:"yellow"
        },
        headerTintColor:'blue',
        headerTitleStyle:{
          fontSize:30
        }

        }}
      >
         <Stack.Screen name='Login' component={Login} 
         options={{
          headerTitle:()=><Button title='Left' onPress={btnAction}/>,
          headerRight:()=><Header/>, 
          title:'User Login',
          headerStyle:{
            backgroundColor:"orange"
          },
          headerTintColor:'black',
          headerTitleStyle:{
            fontSize:40
          }
  
          }}
         
         />
         <Stack.Screen name='Home' component={Home} />
       </Stack.Navigator>

    </NavigationContainer>
       
   
     

    )
  }

  const Header = () =>{
    return(
      <TextInput placeholder='Enter name' />
    )
  }



 


export default App;
