
import React, {useState} from 'react';
import{Button, Text,View, StyleSheet, TextInput, FlatList, SectionList}from 'react-native'




const App = () => {
 
const users = [
  {
    id: 1,
    name: "Himanshu",
    data: ["PHP", "React js", "Angular"]
  },
  {
    id: 2,
    name: "Abhinav",
    data: ["Java", "JS", "HTML"]
  },
  {
    id: 3,
    name: "Aaditya",
    data: ["c", "c++", "Python"]
  },
  {
    id: 4,
    name: "Aaditya",
    data: ["Kotlin", "Redux js", "Ruby"]
  }

]
  return ( 
    <View>
     <Text style={{fontSize:30}}>Section List in React-Native</Text>
    <SectionList 
    sections={users}
    renderItem={({item})=><Text style={{fontSize:20, marginLeft:20}}>{item}</Text>}
    renderSectionHeader={({section:{name}})=>(
    <Text style={{fontSize:30, color:"orange"}}>{name}</Text>
    )}
    
    />
    </View>
    
  );
};








export default App;
