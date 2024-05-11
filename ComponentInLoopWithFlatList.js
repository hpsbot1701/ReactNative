
import React, {useState} from 'react';
import{Button, Text,View, StyleSheet, TextInput, FlatList, ScrollView}from 'react-native'



const App = () => {
 
const users = [
  {
    id: 1,
    name: "Himanshu",
    email: "hps@test.com"
  },
  {
    id: 2,
    name: "Abhinav",
    email: "Abh@test.com"
  },
  {
    id: 3,
    name: "Aaditya",
    email: "Ad@test.com"
  }

]
  return ( 
    <View>
     <Text style={{fontSize:30}}>Component in loop with flatlist</Text>
     <FlatList 
     data = {users}
     renderItem={({item})=><UserData item={item}/>}
     />

    </View>
    
  );
};

const UserData = (props) => {
  const item = props.item
return(
<View style={styles.box}>
    <Text style={styles.item}>{item.name}</Text>
    <Text style={styles.item}>{item.email}</Text>
     </View>
)
}

const styles = StyleSheet.create({
  item:{
    fontSize: 25,
    color: "orange",
    flex: 1,
    margin: 2,
    textAlign: 'center'
  },
  box:{
    flexDirection: "row",
   borderWidth: 2,
   borderColor: "orange",
   padding: 10,
  }
})






export default App;
