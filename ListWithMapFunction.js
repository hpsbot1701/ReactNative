
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
     <Text style={{fontSize:30}}>List with map funtion</Text>
     <ScrollView style={{marginBottom:50}}>
    {
      users.map((item)=><Text style={styles.item}>{item.name}</Text>)
    }  
    </ScrollView>
    </View>
    
  );
};

const styles = StyleSheet.create({
  item:{
    fontSize: 30,
    color: "white",
    padding: 10,
    backgroundColor: "orange",
    borderWidth: 2,
    margin: 10
  }
})




export default App;
