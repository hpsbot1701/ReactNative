
import React, { Component, useEffect, useState } from 'react';
import{Button, Text,View, StyleSheet, TextInput, ScrollView, FlatList, Modal, useAnimatedValue}from 'react-native'

const App = ()=> {

  const[data,setData] = useState([])
const searchUSer = async(text)=>{
  const url=`http://10.0.2.2:3000/users?q=${text}`;
  console.warn(url)
  
  let result = await fetch(url);
  result = await result.json()
  
  if(result){
    setData(result)
  } 
  
}
    
    return(
   <View style={{flex:1}}>
    <TextInput style={{borderWidth:1,borderColor:'skyblue',fontSize:20,margin:20}}
    placeholder={'Search'}
    onChangeText={(text)=>{searchUSer(text)}}
    />
    {
      data.length ?
      data.map((item)=><View>
        <Text>{item.name}</Text>
        <Text>{item.age}</Text>
      </View>):null
    }
    

   </View>   

    )
  }
   

 


export default App;
