
import React, { Component, useEffect, useState } from 'react';
import{Button, Text,View, StyleSheet, TextInput, ScrollView}from 'react-native'

const App = ()=> {

  const[data,setData] = useState([])

    const getApiData =async()=>{
      const url = "https://jsonplaceholder.typicode.com/posts"
      let result = await fetch(url)
      result = await result.json()
      setData(result)
    }

   useEffect(()=>{
    getApiData();
   },[])
    return(
   
       <ScrollView>
      <Text style={{fontSize:30}}>List with API Call</Text>
      {
        data.length ? 
        data.map((item)=><View style={{padding:10, borderBottomColor:'black',borderBottomWidth:1}}>
          <Text style={{fontSize:20, backgroundColor:'skyblue'}}>ID: {item.id}</Text>
          <Text style={{fontSize:20}}>Title: {item.title}</Text>
          <Text style={{fontSize:20}}>Body: {item.body}</Text>
        </View>)
        :
        null
      }
      </ScrollView>
   
     

    )
  }

  

 


export default App;
