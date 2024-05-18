
import React, { Component, useEffect, useState } from 'react';
import{Button, Text,View, StyleSheet}from 'react-native'


const App = ()=> {

  const[show,setshow] = useState(false)
    
    return(
   
     <View style={styles.main}>
      {
        show?<View style={styles.modal}>
        <View style={styles.body}>
          <Text>Some Text</Text>
        <Button title='close' onPress={()=>setshow(false)}/>
        </View>

      </View> : null
      }
      <Button title='Open Dailog' onPress={()=>setshow(true)} />
     </View>
       
   
     

    )
  }
 
  const styles = StyleSheet.create({
    main:{
        flex:1,
        justifyContent:"flex-end"
    },
    modal:{
      flex:1,
      backgroundColor:'rgba(50,50,50,0.5)',
      justifyContent:'center',
      alignItems:'center'
    },
    body:{
      backgroundColor:'#fff',
      height:300,
      width:300,
      padding:20,
      borderRadius:20
    }
  })


export default App;
