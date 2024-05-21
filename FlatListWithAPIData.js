
import React, { Component, useEffect, useState } from 'react';
import{Button, Text,View, StyleSheet, TextInput, ScrollView, FlatList}from 'react-native'

const App = ()=> {
 
  const[data,setData] = useState([])
  const getApiData= async() =>{
    const url="https://jsonplaceholder.typicode.com/posts"
    let result = await fetch(url)
    result = await result.json()
    setData(result)
  } 

  useEffect(()=>{
  getApiData();
  },[])
    return(
   <View>
    <Text style={{fontSize:30}}>FlatList with API Data</Text>
    {
      data.length ?
      <FlatList
      data = {data}
      renderItem={({item})=><View style={{borderBottomColor:'orange',borderBottomWidth:1, padding:10}}>
       <Text style={{fontSize:24, backgroundColor:"yellow"}}>{item.id}</Text>
       <Text style={{fontSize:18}}>{item.title}</Text>
       <Text style={{fontSize:18}}>{item.body}</Text>

      </View>}
      
      /> : null
    }
   </View>
       
   
     

    )
  }

  

 


export default App;
