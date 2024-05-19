
import { useState } from 'react'
import{Button, Text,View, StyleSheet, TextInput}from 'react-native'
export const Login = (props) => {
    const [name,setName] = useState("")
    const age = 28
    return(
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text style={{fontSize:30}}>Login Screen</Text>
        <TextInput
        style={{fontSize:30,borderColor:'black', borderWidth:2}} 
        placeholder='Enter Name' 
        onChangeText={(text)=>setName(text)}
         
        
        />
        <Button title='Go to home' onPress={()=>props.navigation.navigate('Home',{name,age})}/>
      </View>
    )
  }
