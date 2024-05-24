
import React, { Component, useEffect, useState } from 'react';
import{Button, Text,View, StyleSheet, TextInput, ScrollView, FlatList}from 'react-native'

const App = ()=> {
  
 const[data,setData] = useState([])
 const getAPIData = async() =>{
  const url = "http://10.0.2.2:3000/users"
  let result = await fetch(url)
  result = await result.json()
  console.warn(result)
  if(result){
    setData(result)
  }
 }

 const deleteAPIData = async(id)=>{
  const url = "http://10.0.2.2:3000/users"
  let result = await fetch(`${url}/${id}`,{
    method:"delete"
  })
  result = await result.json()
  if(result){
    console.warn("User Deleted")
    getAPIData();
  }
  }

 useEffect(()=>{
  getAPIData();
 },[])
    
    return(
   <View style={styles.container}>

<View style={styles.dataWrapper}>
            <View style={{flex:1}}><Text>Name</Text></View>
            <View style={{flex:1}}><Text>Age</Text></View>
            <View style={{flex:1}}><Text>Operations</Text></View>
          </View>
        {
          data.length?
          data.map((item)=><View style={styles.dataWrapper}>
            <View style={{flex:1}}><Text>{item.name}</Text></View>
            <View style={{flex:1}}><Text>{item.age}</Text></View>
            <View><Button title='Delete' onPress={()=>deleteAPIData(item.id)}/></View>
            <View><Button title='Update'/></View>
          </View>):null
        }
   </View>   

    )
  }

  const styles = StyleSheet.create({
    container:{
      flex:1
    },
    dataWrapper:{
      flexDirection:'row',
      justifyContent:'space-around',
      backgroundColor:'orange',
      margin:5,
      padding:8
    }
  })

 


export default App;
