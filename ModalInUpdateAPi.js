
import React, { Component, useEffect, useState } from 'react';
import{Button, Text,View, StyleSheet, TextInput, ScrollView, FlatList, Modal}from 'react-native'

const App = ()=> {

  const[showModal,setShowModal]=useState(false)
  
 const[data,setData] = useState([])
 const[seletedUser,setSelectedUser] = useState({})
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
  const updateUser = (data)=>{
  setShowModal(true)
  setSelectedUser(data)
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
          data.length>0?
          data.map((item)=>(<View style={styles.dataWrapper}>
            <View style={{flex:1}}><Text>{item.name}</Text></View>
            <View style={{flex:1}}><Text>{item.age}</Text></View>
            <View><Button title='Delete' onPress={()=>deleteAPIData(item.id)}/></View>
            <View><Button title='Update' onPress={()=>{updateUser(item)}}/></View>
          </View>)):null
        }
        <Modal visible={showModal} transparent={true}>
          <UserModal setShowModal = {setShowModal} selectedUser = {seletedUser}/>
        </Modal>
   </View>   

    )
  }
   const UserModal = (props)=>{
    return(          <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Text>{props.selectedUser.name}</Text>
        <Button title='Close' onPress={()=>props.setShowModal(false)}/>
      </View>
    </View>)
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
    },
    centeredView:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    },
    modalView:{
     backgroundColor:"#fff",
     padding:60,
     borderRadius:10,
     shadowColor:'#000',
     shadowOpacity:0.30,
     elevation:5
    }
  })

 


export default App;
