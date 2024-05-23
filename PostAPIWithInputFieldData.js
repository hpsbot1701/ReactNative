
import React, { Component, useEffect, useState } from 'react';
import{Button, Text,View, StyleSheet, TextInput, ScrollView, FlatList}from 'react-native'

const App = ()=> {
  
 
  const[name,setName] = useState('')
  const[age,setAge] = useState(0)
  const[email,setEmail] = useState('')

  const saveData = async()=>{
    console.warn(name);
    console.warn(age);
    console.warn(email);

    const url= "http://10.0.2.2:3000/users";
    let result = await fetch(url, {
      method:"POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify({name,age,email})
    });
    result = await result.json();
    if(result){
      console.warn("Data Entered")
    }
  }
    
    return(
   <View>
    <Text style={{fontSize:30}}>Post API with Input Field data</Text>
    <TextInput style={styles.input} 
    value={name} 
    onChangeText={(text)=>setName(text)} 
    placeholder='Enter Name'/>

    <TextInput style={styles.input} 
    value={age} 
    onChangeText={(text)=>setAge(text)} 
    placeholder='Enter Age'/>

    <TextInput style={styles.input} 
    value={email} 
    onChangeText={(text)=>setEmail(text)} 
    placeholder='Enter Email'/>
    <Button title='Save Data' onPress={saveData}/>
   </View>   

    )
  }

  const styles = StyleSheet.create({
    input:{
      borderColor:"skyblue",
      borderWidth:1,
      margin:20,
      fontSize:20
    }
  })

 


export default App;
