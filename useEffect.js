
import React, { Component, useEffect, useState } from 'react';
import{Button, Text,View, StyleSheet, TextInput, FlatList, SectionList}from 'react-native'
import Student from './components/Student';

const App = ()=> {
  const[count,setCount] = useState(0)
  const[data,setData]=useState(100)

  // useEffect(()=>{
  //    console.warn("Do some Animation");
     
  //  },[data])

  //  useEffect(()=>{
  //   console.warn("Do some Api calls");
    
  // },[count])

    return(
    <View>
      <Text style={{fontSize:30}}>{data}useEffect as Component DidUpdate{count}</Text>
      <Button title='Update Count' onPress={()=>setCount(count+1)}/>
      <Button title = 'Update data' onPress={()=>setData(data+1)} />
      <User info={{data,count}}/>
    </View>

    )
  }
 
  const User = (props)=>{
    

    useEffect(()=>{
      console.warn("do Api calls for count")
    },[props.info.count])
   
    useEffect(()=>{
      console.warn("do Api calls for data")
    },[props.info.data])
  

    return(
      <View>
        <Text style={{fontSize:30}}>data:{props.info.data}</Text>
        <Text style={{fontSize:30}}>count:{props.info.count}</Text>
     </View>
  
      )
  }







export default App;
