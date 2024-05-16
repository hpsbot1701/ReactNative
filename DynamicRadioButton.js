
import React, { Component, useEffect, useState } from 'react';
import{Button, Text,View, StyleSheet, TextInput, FlatList, SectionList, TouchableHighlight, TouchableOpacity}from 'react-native'


const App = ()=> {
  const skills = [
    {
      id:1,
      name:"Java"
    },
    {
      id:2,
      name:"React"
    },
    {
      id:3,
      name:"Python"
    },
    {
      id:4,
      name:"Ruby"
    }
  ]

  const[selectedRadioColor,setSelectedRadioColor] = useState(1)
    return(
      <View style={styles.main}>
        <TouchableOpacity onPress={()=>setSelectedRadioColor(1)}>
          <View style={styles.radioWrapper}>
            <View style={styles.radio}>
              {
                selectedRadioColor===1?<View style={styles.radioBg}></View>:null
              }
            </View>
            <Text style={styles.radioText}>Radio1</Text>  
          </View>
        </TouchableOpacity>

       
     </View>
     

    )
  }
 
const styles = StyleSheet.create({
  main:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  radioText:{
    fontSize:30
  },
  radio:{
    height:40,
    width:40,
    borderColor:'black',
    borderWidth:2,
    borderRadius:20,
    margin:10
  },
  radioWrapper:{
    flexDirection:'row',
    alignItems:'center'
  
  },
  radioBg:{
    backgroundColor:'black',
    height:28,
    width:28,
    borderRadius:20,
    margin:4
  }
 
})




export default App;
