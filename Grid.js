
import React, {useState} from 'react';
import{Button, Text,View, StyleSheet, TextInput, FlatList, ScrollView}from 'react-native'



const App = () => {
 
const users = [
  {
    id: 1,
    name: "Himanshu"
  },
  {
    id: 2,
    name: "Abhinav"
  },
  {
    id: 3,
    name: "Aaditya"
  },
  {
    id: 4,
    name: "Ashish"
  },
  {
    id: 5,
    name: "Babu"
  },
  {
    id: 6,
    name: "Shiva"
  },
  {
    id: 7,
    name: "Danav"
  },
  {
    id: 8,
    name: "Nitin"
  }, 
  {
    id: 9,
    name: "Mukund"
  },
  {
    id: 10,
    name: "Ashutosh"
  },
  {
    id: 11,
    name: "Vikash"
  },
  {
    id: 12,
    name: "Navya"
  }

]
  return ( 
    <View>
     <Text style={{fontSize:30}}>Grid with Dynamic Data</Text>
     <View style={{flex:1, flexDirection: "row", flexWrap:'wrap'}}>
     {
      users.map((item)=><Text style={styles.item}>{item.name}</Text>)
     }
     </View>

    </View>
    
  );
};

const styles = StyleSheet.create({
  item:{
    fontSize:25,
    color:"white",
    backgroundColor:"orange",
    borderColor:"black",
    borderWidth: 5,
    margin: 5,
    padding: 5,
    width: 120,
    height: 120,
    textAlignVertical: 'center',
    textAlign: 'center'
  }
})






export default App;
